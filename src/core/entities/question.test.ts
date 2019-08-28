import { Question } from "./question";

describe('Question Test', () => {
    it('setter should work', () => {
        var q = new Question("", 0, [], 999, "A", 0, "Medium");
        expect(q.getLearnState()).toBe(999);
    });
})
