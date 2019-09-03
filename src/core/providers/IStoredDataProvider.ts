import { UserDataType } from "core/services";
import { User } from "core/entities";

export interface IStoredDataProvider{
    getUserData(): Promise<UserDataType|null>;
    setUserData(userData: UserDataType): Promise<void>;
    getUser():Promise<User|null>;
    setUser(user: User):Promise<void>
}