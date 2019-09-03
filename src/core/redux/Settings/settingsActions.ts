import { UserDataType } from "core/services";
import { StorageFactory } from "core/Singletons";

export const REFRESH_USERDATA = 'settings/refresh_userdata';
export const UPDATE_USERDATA = 'settings/update_userdata';

export const refreshUserDataAction = (userdata: UserDataType) => ({
    type: REFRESH_USERDATA as typeof REFRESH_USERDATA,
    userdata
});

export const updateUserDataAction = (userdata: UserDataType) => {
    var f = new StorageFactory();
    f.updateUserData(userdata);
    return ({
        type: UPDATE_USERDATA as typeof UPDATE_USERDATA,
        userdata
    });
}


export type SettingsActions = 
ReturnType<typeof refreshUserDataAction> |
ReturnType<typeof updateUserDataAction> |
ReturnType<typeof refreshUserDataAction> |
ReturnType<typeof refreshUserDataAction> ;