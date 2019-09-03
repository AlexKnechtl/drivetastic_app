import { START_LOGIN, LOGIN_SUCCESS, START_SIGNUP, SIGNUP_SUCCESS, START_CHECK_DRIVECODE, CHECK_DRIVECODE_SUCCESS, ERROR, SEND_PASSWORD_RESET_EMAIL, SEND_PASSWORD_RESET_EMAIL_SUCCESS, START_AUTO_LOGIN, LOGOUT } from "./actiontypes";
import { User } from "core/entities";

export const StartLoginAction = (credentials: {email: string, password: string}) => ({
    type: START_LOGIN as typeof START_LOGIN,
    credentials
})

export const StartAutoLoginAction = () => ({
    type: START_AUTO_LOGIN as typeof START_AUTO_LOGIN
})

export const LoginSuccessAction = (user: User) => ({
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
    user
})

export const StartSignupAction = (payload:{email: string, password: string, driveCode: string, name: string}) => ({
    type: START_SIGNUP as typeof START_SIGNUP,
    payload
})

export const SignUpSuccessAction = (user: User) => ({
    type: SIGNUP_SUCCESS as typeof SIGNUP_SUCCESS,
    user
})

export const StartCheckDrivecodeAction = (token: string) => ({
    type: START_CHECK_DRIVECODE as typeof START_CHECK_DRIVECODE,
    token
})

export const LogOutAction = ()=> ({
    type: LOGOUT as typeof LOGOUT
})
 
export const CheckDriveCodeSuccessAction = (payload: string) => ({
    type: CHECK_DRIVECODE_SUCCESS as typeof CHECK_DRIVECODE_SUCCESS,
    payload
})

export const SendPasswordResetEmailAction = (email: string) => ({
    type: SEND_PASSWORD_RESET_EMAIL as typeof SEND_PASSWORD_RESET_EMAIL,
    payload: email
})

export const SendPasswordResetEmailSuccessAction = () => ({
    type: SEND_PASSWORD_RESET_EMAIL_SUCCESS as typeof SEND_PASSWORD_RESET_EMAIL_SUCCESS
})

export type ErrorType = "signin"|"signup"|"checktoken"|"emailreset";

export const ErrorAction = (payload: string, type: ErrorType) => ({
    type: ERROR as typeof ERROR,
    error: {message: payload},
    errorType: type as typeof type
})


export type AuthActionTypes = 
ReturnType<typeof CheckDriveCodeSuccessAction> |
ReturnType<typeof ErrorAction> |
ReturnType<typeof LoginSuccessAction> |
ReturnType<typeof SendPasswordResetEmailAction> |
ReturnType<typeof SendPasswordResetEmailSuccessAction> |
ReturnType<typeof SignUpSuccessAction> |
ReturnType<typeof StartAutoLoginAction> |
ReturnType<typeof StartCheckDrivecodeAction> |
ReturnType<typeof StartLoginAction> |
ReturnType<typeof LogOutAction> |
ReturnType<typeof StartSignupAction> ;