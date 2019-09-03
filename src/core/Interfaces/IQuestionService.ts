import { Question, LearnStateToQuestionIDMapping, ModuleTypes } from "core/entities";

export interface IQuestionService{
    init(questions:Question[]): void;
    getAllQuestions(): Question[];
    getQuestionsForModule(moduleID: ModuleTypes): Question[];
    getQuestionsForSection(sectionId: number): Question[];
    updateLearnStates(mappings: LearnStateToQuestionIDMapping[]): void;
    getQuestionById(questionId: number): Question;
}