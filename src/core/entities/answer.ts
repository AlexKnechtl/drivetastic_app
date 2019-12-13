export interface IAnswer {
    answer: string;
    isRight: boolean;
}

export class Answer implements IAnswer {
    answer: string;
    isRight: boolean;

    constructor(answer: string, isRight: boolean) {
        this.answer = answer;
        this.isRight = isRight;
    }
}