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
    constructor(clearInstance = false){
        if(!StorageFactory.instance || clearInstance){
            StorageFactory.instance = this;
        }
        return StorageFactory.instance;
    }
    
    private _QuestionService: IQuestionService = new QuestionProvider();
    private questionProvider: IQuestionProvider = new MockQuestionProvider();
    private tokenService: DeviceTokenService = new DeviceTokenService(true);
    private storedDataProvider: IStoredDataProvider = new MockStoredDataProvider();
    private firebaseDataService: DataService = new DataService();
    private statisticsProvider!: StatisticsProvider;
    private databaseQuestionStoreService: IDataBaseQuestionStoreService = new FirebaseQuestionStoreService();
    private finishedInitialization = false;
    private userdata: UserDataType|undefined;
    currentUser: User|undefined;
    
    onInitFinished = new TypedEvent<{sender: StorageFactory}>()

    public get QuestionService(): IQuestionService|undefined{
        return this._QuestionService;
    }
    
    public get FinishedInit() : boolean {
        return this.finishedInitialization
    }
        
    public get UserData() : UserDataType|undefined {
        return this.userdata;
    }
        
    public get CurrentUser() : User|undefined {
        return this.currentUser;
    }
    
    public get StatisticsProvider(): StatisticsProvider{
        return this.statisticsProvider;
    }


    async init(tokenProvider: ITokenProvider) {
        try{
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
    }
    catch (e) {
        console.log(e);
        console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!");
        
    }
        this.onInitFinished.emit({sender: this});
    }
}