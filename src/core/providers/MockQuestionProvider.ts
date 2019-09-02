import { IQuestionProvider } from "./IQuestionProvider";
import { Question, ModuleTypes, Answer } from "core/entities";

const settings: {modules: ModuleTypes[], questionCountPerSection: number,
    sectionCount: number} = {
    modules: ["B", "G", "C"],
    questionCountPerSection: 20,
    sectionCount: 10
}

function generateRandomIntBetween(start: number, end: number){
    if(end>start)
        var space = end-start;
    else
        var space = start - end;
    return Math.floor(Math.random()*space)+start;
}

export class MockQuestionProvider implements IQuestionProvider{
    async loadQuestions(): Promise<Question[]> {
        var qs:Question[] = [];
        for (let mID = 0; mID < settings.modules.length; mID++) {
            const module = settings.modules[mID];
            for (let sId = 0; sId < settings.sectionCount; sId++) {
                for (let i = 0; i < settings.questionCountPerSection; i++) {
                    var rand = Math.random();
                    var answers = Array.apply(null, Array(4)).map(a=> Math.random()).map((a,i)=> new Answer("Answer"+(i+1), a>0.5));
                    qs.push(new Question("QuestionText"+i, 
                        (i+sId*settings.questionCountPerSection + mID*settings.questionCountPerSection*settings.sectionCount).toString(),
                        answers,
                        generateRandomIntBetween(-3, 6),
                        module, 
                        module+sId, 
                        rand<0.5?"Easy":rand>0.8?"Hard":"Medium"));
                }
            }
        }
        return qs;
    }

}