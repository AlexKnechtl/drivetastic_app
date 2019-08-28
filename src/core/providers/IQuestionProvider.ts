import { Question } from "core/entities";

export interface IQuestionProvider{
    loadQuestions(): Question[];
}