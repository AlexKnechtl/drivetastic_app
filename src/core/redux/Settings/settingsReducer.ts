import {UserDataType} from '../../'
import { SettingsActions,  } from './settingsActions';

export type SettingsState = UserDataType;

const initialState: SettingsState = {
    DeuteranopieMode: false,
    ProtonapieMode: false,
    darkMode: false,
    enabledModules: [],
    language: "",
    secondLanguage: false,
    studyVelocity: 3
}

export default (state = initialState, action: SettingsActions) => {
    switch (action.type) {

    case "settings/refresh_userdata":
        return { ...state, ...action.userdata };
    case "settings/update_userdata": 
        return {...state, ...action.userdata};
    default:
        return state
    }
}
