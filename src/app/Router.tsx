import React from 'react'

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { AccountView, Bereiche, Login, Reg_DriveCode, Reg_Tutorial1, Reg_Tutorial2, Reg_Tutorial3, Modules, Reg_UserData, ExamView, ExamStatistics, Start, VisualChanges, LearnAlgorithm, TrainingView, Exam, AccountSettings, Impressum, Languages, Home, Question, PasswordReset, Reg_Languages, Statistics, Reg_Multilanguage } from '../views';
import TabBar from 'components/specific/TabBar';
import { TabBarTutorial } from 'components/specific/TabBarTutorial';


const tutorial = createMaterialTopTabNavigator({
    tutorial1: Reg_Tutorial1,
    tutorial2: Reg_Tutorial2,
    tutorial3: Reg_Tutorial3,
}, {
        swipeEnabled: true,
        tabBarComponent: (props => (<TabBarTutorial {...props} />)),
        tabBarOptions: {
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: "#fff",
                height: 4
            },
            style: {
                backgroundColor: "#0000"
            },
            labelStyle: {
                fontSize: 20,
                fontWeight: "bold"
            },
            tabStyle: {
                borderBottomColor: "#fff"
            }
        }
    })

const languageSelector = createStackNavigator({
    selectLanguage: Reg_Languages,
    multiLanguage: Reg_Multilanguage
}, {
        headerMode: "none"
    });


const auth = createStackNavigator({
    Start,
    login: Login,
    passwordReset: PasswordReset,
    signup: Reg_DriveCode,
    tutorial,
    enterDetails: Reg_UserData
}, {
        headerMode: "none"
    });


const learning = createStackNavigator({
    Exam,
    ExamStatistics,
    Question
},
{
    headerMode: "none"
});

const Account = createStackNavigator({
    AccountView,
    AccountSettings,
    LearnAlgorithm,
    VisualChanges,
    Impressum,
    Modules,
    Languages
}, {
        headerMode: "none"
    });

const home = createMaterialTopTabNavigator({
    Home: Home,
    Bereiche,
    Account
}, {
        swipeEnabled: true,
        tabBarComponent: (props => (<TabBar {...props} />)),
        tabBarOptions: {
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: "#fff",
                height: 2,
                marginBottom: 8
            },
            labelStyle: {
                fontSize: 18,
                fontWeight: "bold"
            }
        }
    })

const main = createStackNavigator({
    home,
    ExamView,
    TrainingView,
    Statistics
},
    {
        headerMode: "none"
    });

const rootNavigator = createSwitchNavigator({
    auth,
    learning,
    main,
    tutorial,
    custom: Question
}, {
        initialRouteName: "custom"
    });

export const Router = createAppContainer(rootNavigator);
