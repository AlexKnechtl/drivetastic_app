import { IQuestionService } from "core/Interfaces";
import { Question, LearnStateToQuestionIDMapping, ModuleTypes } from "..";


export class QuestionProvider implements IQuestionService{
    getAllQuestions(): Question[] {
        return this.questions;
    }

    private moduleQuestionMappings: {[module: string]: Question[]} = {};
    private questionIdQuestionMappings: {[id: number]: Question} = {};
    private sectionQuestionMappings: {[sectionID: number]: Question[]} = {};
    private questions: Question[];
    

    constructor(questions: Question[]){
        this.questions = questions;
        questions.forEach(question => {
            if(!this.moduleQuestionMappings[question.Module])
                this.moduleQuestionMappings[question.Module] = [];
            this.moduleQuestionMappings[question.Module].push(question);
            if(!this.sectionQuestionMappings[question.SectionId])
                this.sectionQuestionMappings[question.SectionId] = [];
            this.sectionQuestionMappings[question.SectionId].push(question);
            if(this.questionIdQuestionMappings[question.Id])
                throw new Error("Same Question registered twice!! QuestionID: " + question.Id);
            this.questionIdQuestionMappings[question.Id]=question;
        });
    }
    
    getQuestionsForModule(moduleID: ModuleTypes): Question[] {
        if(this.moduleQuestionMappings.hasOwnProperty(moduleID))
            return this.moduleQuestionMappings[moduleID];
        throw new Error("No such Module available! Module given: " + moduleID);
    }    
    
    getQuestionsForSection(sectionId: number): Question[] {
        if(this.sectionQuestionMappings.hasOwnProperty(sectionId))
            return this.sectionQuestionMappings[sectionId];
        throw new Error("No such Section available! Section given: " + sectionId);
    }
    
    updateLearnStates(mappings: LearnStateToQuestionIDMapping[]): void {
        mappings.forEach(m=> {
            var q = (this.questionIdQuestionMappings[m.questionID]||{});
            q.setLearnState&&q.setLearnState(m.learningState)
        })
    }
    
    getQuestionById(questionId: number): Question {
        if(this.questionIdQuestionMappings.hasOwnProperty(questionId))
            return this.questionIdQuestionMappings[questionId];
        throw new Error("No Question with this ID available! QuestionId given: " + questionId);
    }
}