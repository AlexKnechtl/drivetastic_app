import firebase from "firebase"
import { TypedEvent, Disposable } from "core/entities";

export class DeviceTokenService implements Disposable{
    
    async hasTokenChanged(deviceToken: string): Promise<boolean> {
        var user = firebase.auth().currentUser;
        if(user){
            const data = await firebase.database().ref("/users/").child(user.uid).child("currentDevice").once("value");
            var currToken = Object.keys(data.val())[0];
            return currToken != deviceToken;
        }
        else
            throw new Error("User is not authenticated");
    }

    dispose(): void {
        if(this.currentDeviceDBRef)
            this.currentDeviceDBRef.off("child_added", this.tokenListener);
    }

    onTokenChange = new TypedEvent<{currentToken: string}>();

    currentToken = "";
    currentDeviceDBRef: firebase.database.Reference | null;
    private tokenListener(sn: firebase.database.DataSnapshot){
        var val = sn.key;
        // console.log(val);
        if(!val)
            throw new Error("No device token!!");
        else
        {
            this.currentToken != val && this.onTokenChange.emit({currentToken: val});
        }
    }   

    constructor(subscribeToTokenchange: boolean = true){
        if(subscribeToTokenchange)
        {
            var user = firebase.auth().currentUser;
            if(user){
                this.currentDeviceDBRef = firebase.database().ref("/users/").child(user.uid).child("currentDevice");
                
                this.currentDeviceDBRef.on("child_added", this.tokenListener.bind(this));
            }
            else
                throw new Error("User is not authenticated");
        }
        this.currentDeviceDBRef = null;
    }

    async setDeviceToken(token: string){
        var user = firebase.auth().currentUser;
        if(user){
            const data = {
                    [token]: true
            }
            const Pv1 = firebase.database().ref("/users/").child(user.uid).child("devices").update(data);
            const Pv2 = firebase.database().ref("/users/").child(user.uid).child("currentDevice").set(data);
            const v = await Promise.all([Pv1, Pv2]);
            this.currentToken = token;
            if(v.every(x=> x ===undefined))
                return true;
            else
                throw new Error("Error setting Device token. Please try again!");
        }
        throw new Error("User is not authenticated");
    }
}