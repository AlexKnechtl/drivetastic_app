import { IQuestionProvider } from "./IQuestionProvider";
import { Question, ModuleTypes, Answer } from "core/entities";

const settings = {
    modules: "B",
    questionCountPerSection: 20,
    sectionCount: 10
}


export class MockQuestionProvider implements IQuestionProvider{
    loadQuestions(): Question[] {
        var qs:Question[] = [];
        for (let sId = 0; sId < settings.sectionCount; sId++) {
            for (let i = 0; i < settings.questionCountPerSection; i++) {
                var rand = Math.random();
                var answers = Array.apply(null, Array(4)).map(a=> Math.random()).map((a,i)=> new Answer("Answer"+(i+1), a>0.5));
                qs.push(new Question("QuestionText"+i, 
                    i+sId*settings.questionCountPerSection,
                    answers,
                    0,
                    settings.modules as ModuleTypes, 
                    sId, 
                    rand<0.5?"Easy":rand>0.8?"Hard":"Medium"));
            }
        }
        return qs;
    }

}