import {FirebaseQuestionStoreService} from './firebaseQuestionStoreService';
import { signInAsTestUser } from "./authService.test";
import { Question, ModuleTypes, LearnStateToQuestionIDMapping } from '../entities/question';
import { Answer } from '../entities';

function createQuestions(count: number, { learningState = 0, module = "B", sectionid = 0}:
                                        { learningState?: number, module?: ModuleTypes, sectionid?: number} = {}): Question[]{
    var questions = (Array.apply(null, Array(count))).map((q, id: number)=> {
        return new Question("QuestionText", id.toString(), 
        Array.apply(null, Array(4)).map((a,i)=> new Answer(`Answer ${i}`, Math.random()>0.5)),
        learningState, module, sectionid.toString(), "Easy");
    });
    return questions;
}

describe('FirebaseQuestionStoreService test', () => {
    it('should subscribe to question and update it in firebase', async () => {
        expect.assertions(4);
        await signInAsTestUser();
        var fqss = new FirebaseQuestionStoreService();
        var questions = createQuestions(20, {learningState:0});
        questions[10].setLearnState(999);
        fqss.subscribeToQuestionChange(questions);
        questions[5].setLearnState(5);
        questions[12].setLearnState(12);
        questions[7].setLearnState(7);
        var data:LearnStateToQuestionIDMapping[] = await fqss.fetchQuestionData();
        expect(data.some(q=> q.learningState == 12 && q.questionID == "12")).toBeTruthy();
        expect(data.some(q=> q.learningState == 5 && q.questionID == "5")).toBeTruthy();
        expect(data.some(q=> q.learningState == 7 && q.questionID == "7")).toBeTruthy();
        expect(data.every(q=> q.learningState != 999)).toBeTruthy();
    });
})
