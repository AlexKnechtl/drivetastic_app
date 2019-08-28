import { IAnswer } from "./answer";
import { TypedEvent } from "./TypedEvent";

export type ModuleTypes = "A"|"B"|"C"|"D"|"E"|"BE"|"F"|"G";;
export interface ChangingEventArgs<T> {
    previousValue: T,
    newValue: T
}

export class LearnStateToQuestionIDMapping{
    questionID: number;
    learningState: number;

    constructor(questionID: number, learningState: number){
        this.learningState = learningState;
        this.questionID = questionID;
    }
}

export type Difficulty = "Easy" | "Medium" | "Hard";

// export interface IQuestion {
//     answers: IAnswer[];
//     question: string;
//     Id: number;
//     Module: ModuleTypes;
//     SectionId: number;
//     learnState: number;
//     isMainQuestion: boolean;
//     difficulty: Difficulty;
//     isRight: (selectedAnswers: boolean[]) => boolean;
//     onLearnStateChanging: TypedEvent<ChangingEventArgs<number>>;
// }

export class Question {
    isMainQuestion: boolean = false;
    difficulty: Difficulty;
    
    Module: ModuleTypes;
    SectionId: number;

    onLearnStateChanging: TypedEvent<ChangingEventArgs<number>> = new TypedEvent();

    isRight = (selectedAnswers: boolean[]) => {
        if (selectedAnswers.length != this.answers.length)
            throw new Error("ArgumentException: selected answers.length != available answers.length ");
        return this.answers.every((a, i) => a.isRight == selectedAnswers[i]);
    };
    answers: IAnswer[];
    question: string;
    Id: number;
    private _learnState: number = 0;
    public getLearnState= (): number => {
        return this._learnState;
    }
    public setLearnState = (value: number) => {
        this.onLearnStateChanging.emit({ previousValue: this._learnState, newValue: value });
        this._learnState = value;
    }

    constructor(question: string, 
        Id: number, 
        answers: IAnswer[], 
        learnState: number = 0, 
        module: ModuleTypes, 
        sectionId: number,
        difficulty: Difficulty) {
        this.answers = answers;
        this.question = question;
        this.Id = Id;
        this._learnState = learnState;
        this.Module = module;
        this.SectionId = sectionId;
        this.difficulty = difficulty;
    }
}