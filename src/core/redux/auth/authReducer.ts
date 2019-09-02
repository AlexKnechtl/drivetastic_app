import { ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, CHECK_DRIVECODE_SUCCESS, START_CHECK_DRIVECODE, SEND_PASSWORD_RESET_EMAIL, SEND_PASSWORD_RESET_EMAIL_SUCCESS, LOGOUT } from "./actiontypes";
import { AuthActionTypes, ErrorType, ErrorAction, LoginSuccessAction, SignUpSuccessAction, CheckDriveCodeSuccessAction, SendPasswordResetEmailSuccessAction, SendPasswordResetEmailAction, LogOutAction } from "./actions";
import { User } from "core/entities";
import { combineReducers } from 'redux';

interface GenericSEState {
  success: boolean;
  error: string;
}

interface DataState {
  token: string,
  user: User|null
}

const initialGenericSeState: GenericSEState = {
  error: "",
  success: false
}

const initialDataState: DataState = {
  token:'',
  user: null
}

function loginReducer(
  state = initialGenericSeState,
  action: AuthActionTypes
): GenericSEState{
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, success: true, error: "" };
    case ERROR: 
      return action.errorType =="signin"? {...state, success: false, error: action.error.message }: state;
    case LOGOUT: 
      return initialGenericSeState;
    default:
      return state;
  }
}

function signUpReducer(
  state = initialGenericSeState,
  action: AuthActionTypes
): GenericSEState{
  switch (action.type) {
    case SIGNUP_SUCCESS:
        return { ...state, success: true, error: "" };
    case ERROR: 
      return action.errorType =="signup"? {...state, success: false, error: action.error.message }: state;
    case LOGOUT: 
      return initialGenericSeState;
    default:
      return state;
  }
}

function checkTokenReducer(
  state = initialGenericSeState,
  action: AuthActionTypes
): GenericSEState{
  switch (action.type) {
    case CHECK_DRIVECODE_SUCCESS:
        return { ...state, success: true, error: "" };
    case ERROR: 
      return action.errorType =="checktoken"? {...state, success: false, error: action.error.message }: state;
    case LOGOUT: 
      return initialGenericSeState;
    default:
      return state;
  }
}

function emailResetReduer(
  state = initialGenericSeState,
  action: AuthActionTypes
): GenericSEState{
  switch (action.type) {
    case SEND_PASSWORD_RESET_EMAIL: 
      return {...state, success: false, error: ""};
    case SEND_PASSWORD_RESET_EMAIL_SUCCESS: 
      return {...state, success: true, error: ""};
    case ERROR: 
      return action.errorType =="checktoken"? {...state, success: false, error: action.error.message }: state;
    case LOGOUT: 
      return initialGenericSeState;
    default:
      return state;
  }
}

function dataReducer(
  state = initialDataState,
  action: AuthActionTypes
): DataState {
  switch (action.type) {
    case START_CHECK_DRIVECODE:
      return { ...state, token: action.token };
    case LOGIN_SUCCESS: 
      return {...state, user: action.user };
    case SIGNUP_SUCCESS: 
      return {...state, user: action.user}
    case LOGOUT: 
      return initialDataState;
    default:
      return state;
  }
}

export interface AuthState {
  login: GenericSEState;
  signup: GenericSEState;
  tokenCheck: GenericSEState;
  passwordReset: GenericSEState;
  data: DataState;
}

const reducers = {
  data: dataReducer,
  signup: signUpReducer,
  login: loginReducer,
  passwordReset: emailResetReduer,
  tokenCheck: checkTokenReducer
}

export const authReducer = combineReducers(reducers);