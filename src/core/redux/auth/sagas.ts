import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { AuthService } from 'core/services';
import { StartLoginAction, LoginSuccessAction, ErrorAction, StartSignupAction, SignUpSuccessAction, StartCheckDrivecodeAction, CheckDriveCodeSuccessAction } from './actions';
import { START_LOGIN, START_SIGNUP, START_CHECK_DRIVECODE } from './actiontypes';

function *trySignIn({payload}: ReturnType<typeof StartLoginAction>){
    try{
        var user = yield new AuthService().signInWithCredential(payload.email, payload.password);
        if(user)
            yield put(LoginSuccessAction(user))
        else
            throw new Error("No User");
    }
    catch(e){
        yield put(ErrorAction(e.message));
    }
}

function *trySignUp({payload}: ReturnType<typeof StartSignupAction>){
    try{
        var response = yield new AuthService().signUp(payload.email, payload.password, payload.name, payload.driveCode);
        if(response.success)
            yield put(SignUpSuccessAction(response.message))
        else
            throw new Error(response.message);
    }
    catch(e){
        yield put(ErrorAction(e.message));
    }
}

function *tryCheckToken({payload}: ReturnType<typeof StartCheckDrivecodeAction>){
    console.log("tokenchecking...")
    try{
        var auth = new AuthService();
        var response = yield auth.checkToken(payload);
        console.log(response);
        if(response.success)
            yield put(CheckDriveCodeSuccessAction(response.message))
        else
            throw new Error(response.message);
    }
    catch(e){
        yield put(ErrorAction(e.message));
    }
}

export const authSagas = [takeLatest(START_LOGIN, trySignIn), takeLatest(START_SIGNUP, trySignUp), takeLatest(START_CHECK_DRIVECODE, tryCheckToken)];