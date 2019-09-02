import {ModuleTypes} from 'core';
import { StatisticActionTypes, UPDATE_MODULE_STATS, UPDATE_SECTION_STATS } from './statisticActions';
import { StatisticType } from 'core/providers';
import { object } from 'prop-types';
import {ModuleConfig} from '../../../moduleconfig'

export interface StatisticsReducerState {
    modules: {
        [moduleID: string]: {
            statistics: StatisticType,
            sections: {
                [sectionID: string]: StatisticType
            };
        }
    };
    sections: {
        [sectionID: string]: StatisticType
    };
}

const initialState: StatisticsReducerState = {
    modules: {},
    sections: {}
}

export function StatisticsReducer(state = initialState, action: StatisticActionTypes): StatisticsReducerState{
    switch (action.type) {
        case UPDATE_MODULE_STATS:
            return {...state, modules: {...state.modules, [action.moduleID]: 
                {
                    ...state.modules[action.moduleID],
                    statistics: action.statistic
                }} };
        case UPDATE_SECTION_STATS:
                var moduleID = ModuleConfig[action.sectionID].module;
                return {...state, sections: {...state.sections, [action.sectionID]: action.statistic}, 
                modules: {...state.modules, [moduleID]: {
                    ...state.modules[moduleID],
                    sections: {
                        ...(state.modules[moduleID]||{}).sections,
                        [action.sectionID]: action.statistic
                    }
                }} };
        default:
            return state;
    }
}