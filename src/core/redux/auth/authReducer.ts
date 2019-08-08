import { ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, CHECK_DRIVECODE_SUCCESS, START_CHECK_DRIVECODE } from "./actiontypes";
import { AuthActionTypes } from "./actions";

export interface AuthState {
  error: string;
  login: {
    success: boolean;
  };
  signup: {
    success: boolean;
  };
  tokenCheck: {
    success: boolean;
  };
  token: string
}

const initialState: AuthState = {
  error: "",
  login: {
    success: false
  },
  signup: {
    success: false
  },
  tokenCheck: {
    success: false
  },
  token:''
};

export function authReducer(
  state = initialState,
  { type, payload }: AuthActionTypes
): AuthState {
  switch (type) {
    case ERROR:
      return { ...state, error: payload as string };
      case START_CHECK_DRIVECODE:
      return { ...state, token: payload as string, error:"" };

      case LOGIN_SUCCESS:
        return { ...state, error: "", login: { success: true } };
        
      case SIGNUP_SUCCESS:
        return { ...state, error: "", signup: { success: true } };

      case CHECK_DRIVECODE_SUCCESS:
        return { ...state, error: "", tokenCheck: { success: true } };
      default:
      return state;
  }
}
