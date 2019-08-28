import { IQuestionService } from "core/Interfaces";
import { QuestionProvider, DeviceTokenService, UserDataType, DataService, StatisticsProvider } from "core/services";
import { IQuestionProvider } from "core/providers/IQuestionProvider";
import { MockQuestionProvider } from "core/providers";
import { ITokenProvider } from "core/providers/ITokenProvider";
import { IStoredDataProvider } from "core/providers/IStoredDataProvider";
import { MockStoredDataProvider } from "core/providers/MockStoredDataProvider";
import { User } from "core/entities";

export class StorageFactory{

    private static instance: StorageFactory|null = null;
    constructor(tokenProvider: ITokenProvider){
        if(!StorageFactory.instance){
            this.init(tokenProvider)
            StorageFactory.instance = this;
        }
        return StorageFactory.instance;
    }
    
    private _QuestionService: IQuestionService|undefined;
    private questionProvider: IQuestionProvider = new MockQuestionProvider();
    private tokenService: DeviceTokenService = new DeviceTokenService(true);
    private storedDataProvider: IStoredDataProvider = new MockStoredDataProvider();
    private firebaseDataService: DataService = new DataService();
    private statisticsProvider: StatisticsProvider|undefined;
    
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
    


    private async init(tokenProvider: ITokenProvider) {
        this._QuestionService = new QuestionProvider(this.questionProvider.loadQuestions());
        if(await this.tokenService.hasTokenChanged(tokenProvider.getToken())){
            this.userdata = await this.firebaseDataService.getUserData();
        }
        else{
            this.userdata = this.storedDataProvider.getUserData();
        }
        this.currentUser = this.storedDataProvider.getUser();
        this.statisticsProvider = new StatisticsProvider([], 3); //TODO: Weekly Summary store, implement and store repetitions
        this.statisticsProvider.init(this._QuestionService.getAllQuestions());
    }
}