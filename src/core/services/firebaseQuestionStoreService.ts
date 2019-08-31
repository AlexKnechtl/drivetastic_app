import { LearnStateToQuestionIDMapping, Question } from "core/entities";
import firebase from 'firebase';

export interface IDataBaseQuestionStoreService {
    fetchQuestionData(): Promise<LearnStateToQuestionIDMapping[]>;
    subscribeToQuestionChange(questions: Question[]): void;
}

export class FirebaseQuestionStoreService implements IDataBaseQuestionStoreService{
    subscribeToQuestionChange(questions: Question[]): void {
        questions.forEach(q=> q.onLearnStateChanging.on(e=> this.updateLearnState(q, e.previousValue, e.newValue)));
    }

    private updateLearnState(q: Question, previousValue: number, newValue: number): any {
        var user = firebase.auth().currentUser
        if(user)
          return firebase.database().ref("/users/").child(user.uid).child("questions").child(q.Module).child(q.Id.toString()).set(newValue);
        else
        throw new Error("No user is logged in!!");
    }

    async fetchQuestionData(): Promise<LearnStateToQuestionIDMapping[]> {
        var user = firebase.auth().currentUser
        if(user)
        {
            var data = await firebase.database().ref("/users/").child(user.uid).child("questions").once("value");
            var value: {[mid: string]: {[qid: string]: number}} = data.val()
            var modules = Object.values(value).map((questions)=> (Object.entries(questions).map(([qid, ls])=> ({learningState: ls, questionID: qid} as LearnStateToQuestionIDMapping))));
            // return modules.reduce((prev, curr)=> [...prev, ...curr], []);
            var tmp: LearnStateToQuestionIDMapping[] = [];
            return tmp.concat(...modules);
        }
        else
        throw new Error("No user is logged in!!");
    }
}