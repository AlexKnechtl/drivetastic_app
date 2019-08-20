import { Answer, IAnswer } from "./answer";

export interface IQuestion{
    answers: IAnswer[];
    question: string;
    Id: string;
    learnState: number;
    isRight: (selectedAnswers: boolean[]) => boolean;
}

export class Question implements IQuestion{
    isRight = (selectedAnswers: boolean[]) => {
        if(selectedAnswers.length != this.answers.length)
            throw new Error("ArgumentException: selected answers.length != available answers.length ");
        return this.answers.every((a,i)=>a.isRight == selectedAnswers[i]);
    };
    answers: IAnswer[];
    question: string;
    Id: string;
    private _learnState: number = 0;
    public get learnState(): number {
        return this._learnState;
    }
    public set learnState(value: number) {
        this._learnState = value;
    }

    constructor(question: string, Id: string, answers: IAnswer[], learnState: number = 0){
        this.answers = answers;
        this.question = question;
        this.Id = Id;
        this.learnState = learnState;
    }
}