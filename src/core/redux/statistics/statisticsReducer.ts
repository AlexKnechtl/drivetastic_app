import {ModuleTypes} from 'core';
import { StatisticActionTypes, UPDATE_MODULE_STATS, UPDATE_SECTION_STATS } from './statisticActions';
import { StatisticType } from 'core/providers';


export interface StatisticsReducerState {
    modules: {
        [moduleID: string]: StatisticType
    };
    sections: {
        [sectionID: string]: StatisticType
    };
}

const initialState: StatisticsReducerState = {
    modules: {},
    sections: {}
}

export function StatisticsReducer(state = initialState, action: StatisticActionTypes){
    switch (action.type) {
        case UPDATE_MODULE_STATS:
            return {...state, modules: {...state.modules, [action.moduleID]: action.statistic} };
        case UPDATE_SECTION_STATS:
                return {...state, sections: {...state.sections, [action.sectionID]: action.statistic} };
        default:
            return state;
    }
}