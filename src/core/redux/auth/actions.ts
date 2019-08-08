import { START_LOGIN, LOGIN_SUCCESS, START_SIGNUP, SIGNUP_SUCCESS, START_CHECK_DRIVECODE, CHECK_DRIVECODE_SUCCESS, ERROR } from "./actiontypes";
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

export const ErrorAction = (payload: string) => ({
    type: ERROR,
    payload
})


export type AuthActionTypes = ReturnType<typeof StartLoginAction> | 
ReturnType<typeof StartLoginAction> |
ReturnType<typeof LoginSuccessAction> |
ReturnType<typeof StartSignupAction> |
ReturnType<typeof SignUpSuccessAction> |
ReturnType<typeof StartCheckDrivecodeAction> |
ReturnType<typeof StartCheckDrivecodeAction> |
ReturnType<typeof CheckDriveCodeSuccessAction> |
ReturnType<typeof ErrorAction>;