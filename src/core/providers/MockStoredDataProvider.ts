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
    getUserData(): UserDataType {
        return this.userData;
    }    

    setUserData(userData: UserDataType): void {
        this.userData = userData;
    }

    getUser(): User {
        return this.user;
    }
    
    setUser(user: User): void {
        this.user = user;
    }


}