import { ModuleTypes } from "./ModuleTypes";
import { IQuestion, LearnStateToQuestionIDMapping } from "core/entities";

export interface IQuestionService{
    getQuestionForModule(moduleID: ModuleTypes): IQuestion[];
    getQuestionForSection(sectionId: number): IQuestion[];
    updateLearnStates(mappings: LearnStateToQuestionIDMapping): void;
    getQuestionById(questionId: number): IQuestion;
}