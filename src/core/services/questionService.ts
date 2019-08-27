import { IQuestionService, ModuleTypes } from "core/Interfaces";
import { IQuestion, LearnStateToQuestionIDMapping } from "core";


export class QuestionService implements IQuestionService{

    

    constructor(questions: IQuestion[]){

    }
    
    getQuestionForModule(moduleID: ModuleTypes): IQuestion[] {
        throw new Error("Method not implemented.");
    }    
    
    getQuestionForSection(sectionId: number): IQuestion[] {
        throw new Error("Method not implemented.");
    }
    
    updateLearnStates(mappings: LearnStateToQuestionIDMapping): void {
        throw new Error("Method not implemented.");
    }
    
    getQuestionById(questionId: number): IQuestion {
        throw new Error("Method not implemented.");
    }
}