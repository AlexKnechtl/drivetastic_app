import { ModuleTypes } from "core/entities";
import { StatisticType } from "core/providers";

export const UPDATE_MODULE_STATS = "statistics/update_module_stats";
export const UPDATE_SECTION_STATS = "statistics/update_section_stats";


export const updateModuleStatsAction = (moduleID: ModuleTypes, statistic: StatisticType)=>({
    type: UPDATE_MODULE_STATS as typeof UPDATE_MODULE_STATS,
    moduleID,
    statistic
})

export const updateSectionStatsAction = (sectionID: string, statistic: StatisticType)=>({
    type: UPDATE_SECTION_STATS as typeof UPDATE_SECTION_STATS,
    sectionID,
    statistic
})

export type StatisticActionTypes = ReturnType<typeof updateModuleStatsAction> | ReturnType<typeof updateSectionStatsAction>;