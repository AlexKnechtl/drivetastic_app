import {QuestionProvider} from './questionService';
import { Question, Answer, IAnswer, ModuleTypes } from '../entities';

function createQuestions(count: number, { learningState = 0, module = "B", sectionid = 0}:{ learningState?: number, module?: ModuleTypes, sectionid?: number} = {}){
    var tmpQ = new Question("QuestionText", 0, 
        Array.apply(null, Array(4)).map((a,i)=> new Answer(`Answer ${i}`, Math.random()>0.5)),
        learningState, module, sectionid, "Easy");
    var questions = (Array.apply(null, Array(count))).map((q, id)=> {
        var retQ: Question = Object.assign({}, tmpQ);
        retQ.Id = id;
        return retQ;
    });
    return questions;
}

describe('QuestionServiceTest', () => {
    it('should give back all questions for module', () => {
        
        var qs = new QuestionProvider(createQuestions(20));
        var qfm: Question[] = qs.getQuestionsForModule("B");
        expect(qfm.length).toBe(20);
        expect(qfm.reduce((pv, cv)=> pv += cv.Id, 0)).toBe((19*20)/2);
    });
    it('should give back prevoiusly given questions by id', () => {
        var qs = new QuestionProvider(createQuestions(20));
        expect(qs.getQuestionById(3)).toBeTruthy();
        expect(qs.getQuestionById(6)).toBeTruthy();
        expect(qs.getQuestionById(19)).toBeTruthy();
        expect(qs.getQuestionById(0)).toBeTruthy();
        try {
            qs.getQuestionById(30)
        } catch (error) {
            expect(error.message).toBeTruthy();
        }
        try {
            qs.getQuestionById(-1)
        } catch (error) {
            expect(error.message).toBeTruthy();
        }

    });
    it('should update all given questions with new learning indexes', () => {
        var qs = new QuestionProvider(createQuestions(20, {learningState: 1}));
        qs.updateLearnStates(Array.apply(null, Array(20)).map((a,i)=> ({learningState: 3, questionID: i})));
        var mBqs = qs.getQuestionsForModule("B");
        // console.log(mBqs);        
        expect(mBqs.every(q=> q.getLearnState() == 3)).toBe(true);
    });
    it('should give back all questions for section', () => {
        
        var qs = new QuestionProvider(createQuestions(20, {sectionid: 1234}));
        var qfm: Question[] = qs.getQuestionsForSection(1234);
        expect(qfm.length).toBe(20);
        expect(qfm.reduce((pv, cv)=> pv += cv.Id, 0)).toBe((19*20)/2);
    });
})
