import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { AuthService } from 'core/services';
import { User, ModuleTypes } from 'core/entities';
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LoginSuccessAction, SignUpSuccessAction } from '../auth';
import { StorageFactory } from 'core';
import { TokenProvider } from './TokenProvider';
import { updateModuleStatsAction, updateSectionStatsAction, updateWeeklySummaryAction } from '../statistics/statisticActions';
import { eventChannel } from '@redux-saga/core';
import { StatChangedType } from 'core/providers';

function* initializeFactory({user}: ReturnType<typeof LoginSuccessAction> | ReturnType<typeof SignUpSuccessAction>) {
    try {
        var storageFactory = new StorageFactory(true);
        yield storageFactory.init(new TokenProvider());
        console.log(storageFactory.StatisticsProvider);
        
        for (const [id, stat] of Object.entries(storageFactory.StatisticsProvider.ModuleStatistics)) {
            yield put(updateModuleStatsAction(id as ModuleTypes, stat));
        }
        for (const [id, stat] of Object.entries(storageFactory.StatisticsProvider.SectionStatistics)) {
            yield put(updateSectionStatsAction(id, stat));
        }
        yield put(updateWeeklySummaryAction(storageFactory.StatisticsProvider.WeeklySummary));
        yield call(StatsUpdateListener);
    }
    catch (e) {
        console.log(e);
        console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!");
        
    }
}

function statsUpdateChannel(){
    var sf = new StorageFactory();
    return eventChannel((emitter: (input: StatChangedType)=> void)=>{
        var ev = sf.StatisticsProvider.OnStatisticsChanged.on(e=> {emitter(e);});
        return ()=> ev.dispose()
    });
}

function* StatsUpdateListener(){
    const chan = yield call(statsUpdateChannel);
    try {
        while (true) {
            let e: StatChangedType = yield take(chan);
            yield put(updateModuleStatsAction(e.module.moduleID as ModuleTypes, e.module.stats))
            yield put(updateSectionStatsAction(e.section.sectionID, e.section.stats));
            yield put(updateWeeklySummaryAction(e.weeklySummary));
        }
    } catch (error) {
        
    }
}
export const initSagas = [
    takeLatest(LOGIN_SUCCESS, initializeFactory),
    takeLatest(SIGNUP_SUCCESS, initializeFactory)
];