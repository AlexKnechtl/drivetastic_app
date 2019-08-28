import { UserDataType } from "core/services";
import { User } from "core/entities";

export interface IStoredDataProvider{
    getUserData():UserDataType;
    setUserData(userData: UserDataType): void;
    getUser():User;
    setUser(user: User):void
}