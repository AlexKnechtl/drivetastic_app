import { START_LOGIN, LOGIN_SUCCESS, START_SIGNUP, SIGNUP_SUCCESS, START_CHECK_DRIVECODE, CHECK_DRIVECODE_SUCCESS, ERROR, SEND_PASSWORD_RESET_EMAIL, SEND_PASSWORD_RESET_EMAIL_SUCCESS } from "./actiontypes";
import { User } from "core/entities";

export const StartLoginAction = (payload: {email: string, password: string}) => ({
    type: START_LOGIN,
    payload
})

export const LoginSuccessAction = (payload: User) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const StartSignupAction = (payload:{email: string, password: string, driveCode: string, name: string}) => ({
    type: START_SIGNUP,
    payload
})

export const SignUpSuccessAction = (payload: string) => ({
    type: SIGNUP_SUCCESS,
    payload
})

export const StartCheckDrivecodeAction = (payload: string) => ({
    type: START_CHECK_DRIVECODE,
    payload
})
 
export const CheckDriveCodeSuccessAction = (payload: string) => ({
    type: CHECK_DRIVECODE_SUCCESS,
    payload
})

export const SendPasswordResetEmailAction = (email: string) => ({
    type: SEND_PASSWORD_RESET_EMAIL,
    payload: email
})

export const SendPasswordResetEmailSuccessAction = () => ({
    type: SEND_PASSWORD_RESET_EMAIL_SUCCESS
})

export type ErrorType = "signin"|"signup"|"checktoken"|"emailreset";

export const ErrorAction = (payload: string, type: ErrorType) => ({
    type: ERROR,
    payload: {message: payload, type}
})


export type AuthActionTypes = ReturnType<typeof StartLoginAction> | 
ReturnType<typeof StartLoginAction> |
ReturnType<typeof LoginSuccessAction> |
ReturnType<typeof StartSignupAction> |
ReturnType<typeof ErrorAction> |
ReturnType<typeof SignUpSuccessAction> |
ReturnType<typeof StartCheckDrivecodeAction> |
ReturnType<typeof SendPasswordResetEmailSuccessAction> |
ReturnType<typeof SendPasswordResetEmailAction> |
ReturnType<typeof CheckDriveCodeSuccessAction>;