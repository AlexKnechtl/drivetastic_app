import { ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, CHECK_DRIVECODE_SUCCESS, START_CHECK_DRIVECODE, SEND_PASSWORD_RESET_EMAIL, SEND_PASSWORD_RESET_EMAIL_SUCCESS } from "./actiontypes";
import { AuthActionTypes, ErrorType, ErrorAction } from "./actions";

export interface AuthState {
  login: {
    success: boolean;
    error: string;
  };
  signup: {
    success: boolean;
    error: string;
  };
  tokenCheck: {
    success: boolean;
    error: string;
  };
  passwordReset: {
    success: boolean;
    error: string;
  };
  token: string
}

const initialState: AuthState = {
  login: {
    success: false,
    error: ""
  },
  signup: {
    success: false,
    error: ""
  },
  tokenCheck: {
    success: false,
    error:""
  },
  passwordReset:{
    success: false,
    error:""
  },
  token:''
};

export function authReducer(
  state = initialState,
  { type, payload }: AuthActionTypes
): AuthState {
  switch (type) {
    case ERROR:
      payload = (payload as {message: string, type: ErrorType});
      switch(payload.type){
        case "checktoken": return { ...state, tokenCheck:{...state.tokenCheck, error: payload.message} };
        case "signin": return { ...state, login:{...state.login, error: payload.message} };
        case "signup": return { ...state, signup:{...state.signup, error: payload.message} };
        case "emailreset": return {...state, passwordReset:{...state.passwordReset, error: payload.message}}
      }
      case START_CHECK_DRIVECODE:
      return { ...state, token: payload as string };

      case LOGIN_SUCCESS:
        return { ...state, login: { success: true, error: "" } };
        
      case SIGNUP_SUCCESS:
        return { ...state, signup: { success: true, error: "" } };

      case CHECK_DRIVECODE_SUCCESS:
        return { ...state, tokenCheck: { success: true, error: "" } };
      case SEND_PASSWORD_RESET_EMAIL: 
        return {...state, passwordReset:{success: false, error: ""}}
      case SEND_PASSWORD_RESET_EMAIL_SUCCESS: 
        return {...state, passwordReset:{success: true, error: ""}}
      
      default:
      return state;
  }
}
