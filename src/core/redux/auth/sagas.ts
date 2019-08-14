import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthService } from 'core/services';
import { StartLoginAction, LoginSuccessAction, ErrorAction, StartSignupAction, SignUpSuccessAction, StartCheckDrivecodeAction, CheckDriveCodeSuccessAction } from './actions';
import { START_LOGIN, START_SIGNUP, START_CHECK_DRIVECODE } from './actiontypes';

function* trySignIn({ payload }: ReturnType<typeof StartLoginAction>) {
    try {
        var auth = new AuthService();
        var user = yield auth.signInWithCredential(payload.email, payload.password);
        if (user)
            yield put(LoginSuccessAction(user))
        else
            yield put(ErrorAction("ERROR: No User", "signin"))
    }
    catch (e) {
        yield put(ErrorAction(e.message, "signin"));
    }
}

function* trySignUp({ payload }: ReturnType<typeof StartSignupAction>) {
    try {
        var response = yield new AuthService().signUp(payload.email, payload.password, payload.name, payload.driveCode);
        if (response.success)
            yield put(SignUpSuccessAction(response.message))
        else
        yield put(ErrorAction(response.message, "signup"));
        console.log('====================================');
        console.log(response);
        console.log('====================================');
    }
    catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        yield put(ErrorAction(e.message, "signup"));
    }
}

function* tryCheckToken({ payload }: ReturnType<typeof StartCheckDrivecodeAction>) {
    try {
        var auth = new AuthService();
        var response = yield auth.checkToken(payload);
        console.log(response);
        if (response.success)
            yield put(CheckDriveCodeSuccessAction(response.message))
        else
            throw new Error(response.message);
    }
    catch (e) {
        yield put(ErrorAction(e.message, "checktoken"));
    }
}

export const authSagas = [takeLatest(START_LOGIN, trySignIn), takeLatest(START_SIGNUP, trySignUp), takeLatest(START_CHECK_DRIVECODE, tryCheckToken)];