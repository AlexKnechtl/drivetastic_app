import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthService } from 'core/services';
import { User, ModuleTypes } from 'core/entities';
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LoginSuccessAction, SignUpSuccessAction } from '../auth';
import { StorageFactory } from 'core';
import { TokenProvider } from './TokenProvider';
import { updateModuleStatsAction, updateSectionStatsAction } from '../statistics/statisticActions';

function* initializeFactory({user}: ReturnType<typeof LoginSuccessAction> | ReturnType<typeof SignUpSuccessAction>) {
    try {
        var storageFactory = new StorageFactory(true);
        yield storageFactory.init(new TokenProvider());
        console.log("---------in Storage Factory init2---------");
        console.log(storageFactory.StatisticsProvider);
        
        for (const [id, stat] of Object.entries(storageFactory.StatisticsProvider.ModuleStatistics)) {
            yield put(updateModuleStatsAction(id as ModuleTypes, stat));
        }
        console.log("---------in Storage Factory init3---------");
        for (const [id, stat] of Object.entries(storageFactory.StatisticsProvider.SectionStatistics)) {
            yield put(updateSectionStatsAction(id, stat));
        }
        console.log("---------in Storage Factory init4---------");
    }
    catch (e) {
        console.log(e);
        console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!");
        
    }
}
export const initSagas = [
    takeLatest(LOGIN_SUCCESS, initializeFactory),
    takeLatest(SIGNUP_SUCCESS, initializeFactory)
];