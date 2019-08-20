import { IQuestion, TypedEvent } from "../entities"

export type LearningQueueOptions = {
    length?: number,

}

export type MinimumQuestionState = {
    minimumState: number
};

export class LearningService {

    private questions: IQuestion[] = [];

    private learningQueue: IQuestion[] = [];


    private learningQueueLength = 10;
    private learningQueueIndex = -1;

    constructor(options: LearningQueueOptions = {}) {
        if (options.length)
            this.learningQueueLength = options.length;

    }

    async loadQuestions(questions: IQuestion[]) {
        if (this.learningQueueLength > questions.length)
            throw new Error("To few questions provided!!");
        this.questions = questions;
        this.learningQueue = questions.sort(this.compare).slice(0, this.learningQueueLength);
        this.learningQueueIndex = 0;
    }

    getQuestion() {
        return this.learningQueue[this.learningQueueIndex];
    }

    private incrementIndex = () => this.learningQueueIndex = (this.learningQueueIndex + 1) % this.learningQueueLength;

    private compare(a: IQuestion, b: IQuestion){
        var x = a.learnState - b.learnState;
        if(x == 0)
        {
            x = ([a.Id, b.Id].sort()[0] == a.Id)? -1: 1;
        }
        return x;
    }
    
    answerCurrentQuestion(answeredRight: boolean) {
        if (answeredRight) {
            var q = this.getQuestion();
            q.learnState = q.learnState < 0 ? 1 : q.learnState + 1;
            var newQuestion = this.questions.sort(this.compare).find(v=> this.learningQueue.every(v1=> v1.Id != v.Id));
            if(newQuestion)
                this.learningQueue[this.learningQueueIndex] = newQuestion;
            this.checkIfAllLearned();
        }
        else {
            var q = this.getQuestion();
            q.learnState = q.learnState > 0 ? -1 : q.learnState - 1;
        }
        this.incrementIndex();
    }

    minimumQuestionState = 0;
    private async checkIfAllLearned() {
        var minimumState = 1000;
        this.questions.forEach(q => minimumState > q.learnState && (minimumState = q.learnState) );
        if (minimumState != this.minimumQuestionState) {
            this.minimumQuestionState = minimumState;
            this.onMinimumQuestionStateChanged.emit({minimumState: minimumState});
        }
    }

    onMinimumQuestionStateChanged = new TypedEvent<MinimumQuestionState>();
}