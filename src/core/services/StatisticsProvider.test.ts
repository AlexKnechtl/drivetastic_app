import { StatisticsProvider } from "./StatisticsProvider";
import { Question, Answer, ModuleTypes } from "../../core";

function createQuestions(count: number, { learningState = 0, module = "B", sectionid = 0}:
                                        { learningState?: number, module?: ModuleTypes, sectionid?: number} = {}): Question[]{
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

describe('StatisticsProvider Test', () => {
    it('should be 0% progress', () => {
        var sp = new StatisticsProvider([], 3);
        sp.init(createQuestions(20, {learningState: 0}));
        expect(sp.ModuleStatistics["B"].progress).toBe(0);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(0);
    });
    it('should sould be 100% progress but 33% learned', () => {
        var sp = new StatisticsProvider([], 3);
        sp.init(createQuestions(20, {learningState: 1}));
        expect(sp.ModuleStatistics["B"].progress).toBe(1);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(1/3);
        expect(sp.SectionStatistics[0].progress).toBe(1);
        expect(sp.SectionStatistics[0].successPropability).toBe(1/3);
    });
    it('should sould be 100% progress but 25% learned', () => {
        var sp = new StatisticsProvider([], 4);
        sp.init(createQuestions(20, {learningState: 1}));
        expect(sp.ModuleStatistics["B"].progress).toBe(1);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(0.25);
        expect(sp.SectionStatistics[0].progress).toBe(1);
        expect(sp.SectionStatistics[0].successPropability).toBe(0.25);
    });

    it('should calc progress right', () => {
        var sp = new StatisticsProvider([], 4);
        var x = {questionCount: 10, questionsLearnedOnce: 10, positiveLearnStatesSum: 20, progress: 0, successPropability: 0};
        sp.calcProgressForStat(x);
        expect(x.progress).toBe(1);
        expect(x.successPropability).toBe(0.5);
        // expect(sp.ModuleStatistics["B"].successPropability).toBe(0.3333);
    });
    it('should update Stats if questions are changed', () => {
        var sp = new StatisticsProvider([], 4);
        var qs = createQuestions(20, {learningState: 1});
        sp.init(qs);
        expect(sp.ModuleStatistics["B"].progress).toBe(1);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(0.25);
        expect(sp.SectionStatistics[0].progress).toBe(1);
        expect(sp.SectionStatistics[0].successPropability).toBe(0.25);
        qs.forEach(element => {
            element.setLearnState(2);
        });
        expect(sp.ModuleStatistics["B"].progress).toBe(1);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(0.5);
        expect(sp.SectionStatistics[0].progress).toBe(1);
        expect(sp.SectionStatistics[0].successPropability).toBe(0.5);
        qs.forEach(element => {
            element.setLearnState(0);
        });
        expect(sp.ModuleStatistics["B"].progress).toBe(0);
        expect(sp.ModuleStatistics["B"].successPropability).toBe(0);
        expect(sp.SectionStatistics[0].progress).toBe(0);
        expect(sp.SectionStatistics[0].successPropability).toBe(0);
    });
})
