import firebase from "firebase";
import { User } from "core";

export type UserDataType={
  language: string,
  secondLanguage: string|boolean,
} 

export class DataService {
  async setLanguage(language: string) {
    var user = firebase.auth().currentUser
    if(user)
      return firebase.database().ref("/users/").child(user.uid).child("userdata").update({language: language, secondLanguage: false});
    else
    throw new Error("No user is logged in!!");
  }

  async setMultiLanguage(mainLanguage: string, secondLanguage: string) {
    var user = firebase.auth().currentUser
    if(user)
      return firebase.database().ref("/users/").child(user.uid).child("userdata").update({language: mainLanguage, secondLanguage});
    else
    throw new Error("No user is logged in!!");
  }

  async getUserData(): Promise<UserDataType>{
    var user = firebase.auth().currentUser
    if(user){
      var sn = await firebase.database().ref("/users/").child(user.uid).child("userdata").once("value");
      var data: UserDataType = sn.val();
      if(!data.secondLanguage)
        data.secondLanguage = false;
      return data;
    }
    else
    throw new Error("No user is logged in!!");
  }
}
