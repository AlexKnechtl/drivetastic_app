import {LearningService} from './'
import { Question } from '../entities';

describe('LearningService test', () => {
    it('should ask all questions through and raise event', async () => {
        expect.assertions(1);
        var ls = new LearningService();
        var qs = Array.apply(null, Array(20));
        function zeroPad(num, places) {
            var zero = places - num.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + num;
        }
        qs = qs.map((v, i)=> new Question("", i, [], 0, "B", 0, "Easy"));
        await ls.loadQuestions(qs);
        ls.onMinimumQuestionStateChanged.on((e)=> expect(e.minimumState).toBeGreaterThanOrEqual(1))
        var ids = [];
        for (let index = 0; index < 20; index++) {
            var q = ls.getQuestion();
            ls.answerCurrentQuestion(true);
            ids.push(q.Id);
        }
        // console.log(ids);
    });
    it('should ask all questions through and shouldn`t repeat a question', async () => {
        expect.assertions(4);
        var ls = new LearningService();
        var qs = Array.apply(null, Array(20));
        qs = qs.map((v, i)=> new Question("", i, [], 0, "B", 0, "Easy"));
        await ls.loadQuestions(qs);
        ls.onMinimumQuestionStateChanged.on((e)=> expect(e.minimumState).toBeLessThan(0))
        var ids = [];
        for (let index = 0; index < 40; index++) {
            var q = ls.getQuestion();
            ls.answerCurrentQuestion(!q.Id.toString().includes("3"));
            ids.push(q.Id);
        }
        // console.log(ids);
    });
    it('should throw an error', async () => {
        expect.assertions(1);
        var ls = new LearningService();
        try{
            await ls.loadQuestions(Array.prototype.fill(0, 0, 9).map((v, i)=> new Question("", i, [], 0, "B", 0, "Easy")));
        }
        catch(e){
            expect(e.message).toContain("To few questions");
        }
    })
})
