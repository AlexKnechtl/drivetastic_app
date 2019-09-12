import { IStoredDataProvider } from "./IStoredDataProvider";
import { UserDataType, User } from "core";

export class MockStoredDataProvider implements IStoredDataProvider{
    userData: UserDataType = {
        language: "de",
        secondLanguage: false,
        DeuteranopieMode: false,
        ProtonapieMode: false,
        darkMode: false,
        enabledModules: ["B", "G"],
        studyVelocity: 3
    }
    user: User = new User("#########TEST_UID###########", "jest@test.com", "Jest Test Name");
    async getUserData() {
        return this.userData;
    }    

    async setUserData(userData: UserDataType) {
        this.userData = userData;
    }

    async getUser() {
        return this.user;
    }
    
    async setUser(user: User) {
        this.user = user;
    }


}