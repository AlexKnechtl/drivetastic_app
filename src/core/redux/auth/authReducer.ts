import { ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, CHECK_DRIVECODE_SUCCESS } from "./actiontypes";
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
  }
};

export function authReducer(
  state = initialState,
  { type, payload }: AuthActionTypes
): AuthState {
  switch (type) {
    case ERROR:
      return { ...state, error: payload as string };

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
