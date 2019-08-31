import { Question } from "core/entities";

export type StatisticType = {
    successPropability: number, 
    progress: number,
    questionCount: number,
    questionsLearnedOnce: number,
    positiveLearnStatesSum: number
};

export type WeeklySummary = {
    questionsLearned: number
};

export class StatisticsProvider{
    private moduleStatistics: {[moduleId: string]: StatisticType} = {};
    private sectionStatistics: {[sectionId: number]: StatisticType} = {}
    private weeklySummary: WeeklySummary[];
    private repetitions: number;

    
    public get WeeklySummary() : WeeklySummary[] {
        return this.weeklySummary;
    }
    
    public get ModuleStatistics() : {[moduleId: string]: StatisticType} {
        return this.moduleStatistics;
    }
    
    public get SectionStatistics() : {[sectionId: number]: StatisticType} {
        return this.sectionStatistics;
    }
    

    constructor(weeklySummary: WeeklySummary[], repetitionsToHaveQuestionLearned: number){
        this.weeklySummary = weeklySummary;
        this.repetitions = repetitionsToHaveQuestionLearned;
    }

    private recalcStatPerQuestion(question: Question, prevLearnState: number, nextLearnState: number){
        var m = this.moduleStatistics[question.Module];
        var s = this.sectionStatistics[question.SectionId];
        if(prevLearnState > 0 && nextLearnState <= 0){
            m.questionsLearnedOnce--;
            s.questionsLearnedOnce--;
        }
        if(prevLearnState<=0 && nextLearnState>0){
            m.questionsLearnedOnce++;
            s.questionsLearnedOnce++;
        }
        if(prevLearnState>0){
            m.positiveLearnStatesSum-= prevLearnState>3?3:prevLearnState;
            s.positiveLearnStatesSum-= prevLearnState>3?3:prevLearnState;
        }
        if(nextLearnState>0){
            m.positiveLearnStatesSum += nextLearnState>3?3:nextLearnState;
            s.positiveLearnStatesSum += nextLearnState>3?3:nextLearnState;
        }
        this.calcProgressForStat(m);
        this.calcProgressForStat(s);
    }

    calcProgressForStat(stat: StatisticType){
        stat.progress = stat.questionsLearnedOnce / stat.questionCount;
        stat.successPropability = stat.positiveLearnStatesSum / (stat.questionCount*this.repetitions);
    }

    async init(questions: Question[]){
        questions.forEach(question => {
            var learnState = question.getLearnState();
            if(!this.moduleStatistics[question.Module])
                this.moduleStatistics[question.Module] = {progress: 0, successPropability: 0, questionCount: 0, positiveLearnStatesSum: 0, questionsLearnedOnce: 0};
            var m = this.moduleStatistics[question.Module]
            if(!this.sectionStatistics[question.SectionId])
                this.sectionStatistics[question.SectionId] = {progress: 0, successPropability: 0, questionCount: 0, positiveLearnStatesSum: 0, questionsLearnedOnce: 0};
            var s = this.sectionStatistics[question.SectionId]

            m.questionCount++;
            s.questionCount++;
            var maxLearnState = learnState>3?3:learnState;
            if(learnState>0){
                m.questionsLearnedOnce++;
                s.questionsLearnedOnce++;
                m.positiveLearnStatesSum += maxLearnState;
                s.positiveLearnStatesSum += maxLearnState;
            }

            question.onLearnStateChanging.on(e=> this.recalcStatPerQuestion(question, e.previousValue, e.newValue));

        });
        Object.values(this.moduleStatistics).forEach(v=> this.calcProgressForStat(v));
        Object.values(this.sectionStatistics).forEach(v=> this.calcProgressForStat(v));
    }
}