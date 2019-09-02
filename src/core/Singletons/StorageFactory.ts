import { IQuestionService } from "core/Interfaces";
import { QuestionProvider, DeviceTokenService, UserDataType, DataService } from "core/services";
import { IQuestionProvider } from "core/providers/IQuestionProvider";
import { MockQuestionProvider, StatisticsProvider } from "core/providers";
import { ITokenProvider } from "core/providers/ITokenProvider";
import { IStoredDataProvider } from "core/providers/IStoredDataProvider";
import { MockStoredDataProvider } from "core/providers/MockStoredDataProvider";
import { User, TypedEvent } from "core/entities";
import { IDataBaseQuestionStoreService, FirebaseQuestionStoreService } from "core/services/firebaseQuestionStoreService";

export class StorageFactory{

    private static instance: StorageFactory|null = null;
    constructor(tokenProvider: ITokenProvider){
        if(!StorageFactory.instance){
            this.init(tokenProvider)
            StorageFactory.instance = this;
        }
        return StorageFactory.instance;
    }
    
    private _QuestionService: IQuestionService = new QuestionProvider();
    private questionProvider: IQuestionProvider = new MockQuestionProvider();
    private tokenService: DeviceTokenService = new DeviceTokenService(true);
    private storedDataProvider: IStoredDataProvider = new MockStoredDataProvider();
    private firebaseDataService: DataService = new DataService();
    private statisticsProvider: StatisticsProvider|undefined;
    private databaseQuestionStoreService: IDataBaseQuestionStoreService = new FirebaseQuestionStoreService();
    
    public get QuestionService(): IQuestionService|undefined{
        return this._QuestionService;
    }
    
    private finishedInitialization = false;
    public get FinishedInit() : boolean {
        return this.finishedInitialization
    }
    
    private userdata: UserDataType|undefined;
    
    public get UserData() : UserDataType|undefined {
        return this.userdata;
    }
    
    currentUser: User|undefined;
    
    public get CurrentUser() : User|undefined {
        return this.currentUser;
    }
    
    onInitFinished = new TypedEvent<{sender: StorageFactory}>()

    private async init(tokenProvider: ITokenProvider) {
        var promises = [];
        var qp =  this.questionProvider.loadQuestions();
        var qsip = qp.then(qs=> this._QuestionService.init(qs));
        promises.push(qsip);
        if(await this.tokenService.hasTokenChanged(tokenProvider.getToken())){
            this.userdata = await this.firebaseDataService.getUserData();
            await qsip;
            this._QuestionService.updateLearnStates(await this.databaseQuestionStoreService.fetchQuestionData())
        }
        else{
            this.userdata = this.storedDataProvider.getUserData();
        }
        this.currentUser = this.storedDataProvider.getUser();
        this.statisticsProvider = new StatisticsProvider([], this.userdata.studyVelocity); //TODO: Weekly Summary store, implement and store repetitions
        promises.push(this.statisticsProvider.init(await qp));
        this.databaseQuestionStoreService.subscribeToQuestionChange(await qp);

        await Promise.all(promises);
        this.onInitFinished.emit({sender: this});
    }
}