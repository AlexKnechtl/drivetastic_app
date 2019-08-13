import firebase from "firebase";
import { User } from "core";

export class AuthService {
  async signInWithCredential(email: string, password: string) {
    try {
      var u = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (u.user) {
        var name = (await firebase
          .database()
          .ref("/users/")
          .child(u.user.uid)
          .child("name")
          .once("value")).val() as string;
        if (name) return new User(u.user.uid, email, name);
      }
      throw new Error("User cannot be fetched");
    } catch (e) {
      throw e;
    }
  }

  async signIn() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          var name = (await firebase
            .database()
            .ref("/users/")
            .child(user.uid)
            .child("name")
            .once("value")).val() as string;
          if (name) resolve(new User(user.uid, user.email as string, name));
        }
        reject("No Autologin");
      });
    });
  }

  async signOut() {
    return firebase.auth().signOut();
  }

  async signUp(
    email: string,
    password: string,
    name: string,
    token: string
  ): Promise<{ success: boolean; message: string }> {
    token = token.replace(/[\W\-_ ]/g, "").toUpperCase();
    var url = "https://drivetastic-cb039.web.app/api/v1/users/signup";
    var response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token,
        email: email,
        password: password,
        name: name
      })
    });
    var text = await response.text();

    if (response.ok) {
      return { success: true, message: text };
    } else return { success: false, message: text };
  }

  async checkToken(
    token: string
  ): Promise<{ success: boolean; message: string }> {
    token = token.replace(/[\W\-_ ]/g, "").toUpperCase();
    console.log(token);
    var url = "https://drivetastic-cb039.web.app/api/v1/tokens/check";
    var response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
    var text = await response.text();

    if (response.ok) {
      return { success: true, message: text };
    } else return { success: false, message: text };
  }

  async sendPasswordResetEmail(email: string) {
    return firebase.auth().sendPasswordResetEmail(email);
  }
}
