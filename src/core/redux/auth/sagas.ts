import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthService } from 'core/services';
import { StartLoginAction, LoginSuccessAction, ErrorAction, StartSignupAction, SignUpSuccessAction, StartCheckDrivecodeAction, CheckDriveCodeSuccessAction, SendPasswordResetEmailAction, SendPasswordResetEmailSuccessAction } from './actions';
import { START_LOGIN, START_SIGNUP, START_CHECK_DRIVECODE, SEND_PASSWORD_RESET_EMAIL, START_AUTO_LOGIN, LOGOUT } from './actiontypes';
import { User } from 'core/entities';

function* trySignIn({ credentials }: ReturnType<typeof StartLoginAction>) {
    try {
        var auth = new AuthService();
        var user = yield auth.signInWithCredential(credentials.email, credentials.password);
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
            yield put(SignUpSuccessAction(new User("", payload.email, payload.name)))
        else
        yield put(ErrorAction(response.message, "signup"));
    }
    catch (e) {
        yield put(ErrorAction(e.message, "signup"));
    }
}

function* tryCheckToken({ token }: ReturnType<typeof StartCheckDrivecodeAction>) {
    try {
        var auth = new AuthService();
        var response = yield auth.checkToken(token);
        // console.log(response);
        if (response.success)
            yield put(CheckDriveCodeSuccessAction(response.message))
        else
            throw new Error(response.message);
    }
    catch (e) {
        yield put(ErrorAction(e.message, "checktoken"));
    }
}

function* trySendPasswordResetMail({payload}:ReturnType<typeof SendPasswordResetEmailAction>){
    try {
        var auth = new AuthService();
        yield auth.sendPasswordResetEmail(payload)
        yield put(SendPasswordResetEmailSuccessAction())
    } catch (error) {
        yield put(ErrorAction(error.message, "emailreset"))
    }
}

function* trySignInWithOutCredential(){
    try {
        var auth = new AuthService();
        var user = yield auth.signIn()
        yield put(LoginSuccessAction(user))
    } catch (error) {
        // yield put(ErrorAction(error.message, ""))
    }
}

function* signOut(){
    try {
        var auth = new AuthService();
        yield auth.signOut();
    } catch (error) {
        // yield put(ErrorAction(error.message, ""))
    }
}

export const authSagas = [
    takeLatest(LOGOUT, signOut),
    takeLatest(START_AUTO_LOGIN, trySignInWithOutCredential), 
    takeLatest(START_LOGIN, trySignIn), 
    takeLatest(START_SIGNUP, trySignUp), 
    takeLatest(START_CHECK_DRIVECODE, tryCheckToken), 
    takeLatest(SEND_PASSWORD_RESET_EMAIL, trySendPasswordResetMail)
];