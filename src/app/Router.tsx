import React from 'react'

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { Account, Bereiche, Login, Reg_DriveCode, Reg_Tutorial1, Reg_Tutorial2, Reg_Tutorial3, Reg_UserData, ExamView, ExamStatistics, Start, TrainingView, Exam, AccountSettings, Impressum, Languages, Home, Question, PasswordReset, Reg_Languages, Reg_Multilanguage } from '../views';
import TabBar from 'components/specific/TabBar';
import { TabBarTutorial } from 'components/specific/TabBarTutorial';

const settings = createStackNavigator({
    Account,
    AccountSettings,
    Impressum,
    Languages
}, {
        headerMode: "none"
    });

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
});

const home = createMaterialTopTabNavigator({
    Home: Home,
    Bereiche,
    accountsettings: {
        screen: settings,
        label: "Account"
    }
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
    TrainingView
},
    {
        headerMode: "none"
    });

const rootNavigator = createSwitchNavigator({
    auth,
    learning,
    main,
    tutorial,
}, {
        initialRouteName: "tutorial"
    });

export const Router = createAppContainer(rootNavigator);
