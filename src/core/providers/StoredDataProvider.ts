import { IStoredDataProvider } from "./IStoredDataProvider";
import { UserDataType, User } from "core";

import {AsyncStorage} from 'react-native';

export class StoredDataProvider implements IStoredDataProvider{
    private userdata: UserDataType|undefined;
    
    async getUserData(): Promise<UserDataType> {
        var res = await AsyncStorage.getItem("UserData");
        if(!res)
            return {};
        var data = JSON.parse(res);
        this.userdata = data;
        return data;
    }    

    async setUserData(userData: UserDataType): Promise<void> {
        await AsyncStorage.setItem("UserData", JSON.stringify({...(await this.getUserData()), ...userData}));
    }
    async getUser(): Promise<User|null> {
        var res = await AsyncStorage.getItem("User");
        if(!res)
            return null;
        var data = JSON.parse(res);
        return data;
    }
    async setUser(user: User): Promise<void> {
        await AsyncStorage.setItem("User", JSON.stringify(user));
    }
}