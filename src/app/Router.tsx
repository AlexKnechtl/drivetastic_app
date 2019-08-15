import React from 'react'

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { Account, Bereiche, Login, Reg_DriveCode, Reg_Tutorial1, Reg_Tutorial2, Reg_Tutorial3, Reg_UserData, ExamView, ExamStatistics, Start, TrainingView, Exam, AccountSettings, AGB, Impressum, Modules, Home, Question, PasswordReset } from '../views';
import TabBar from 'components/specific/TabBar';
import { TabBarTutorial } from 'components/specific/TabBarTutorial';

const tutorial = createMaterialTopTabNavigator({
    tutorial1: Reg_Tutorial1,
    tutorial2: Reg_Tutorial2,
    tutorial3: Reg_Tutorial3,
},{
    swipeEnabled: true,
    tabBarComponent: (props=> (<TabBarTutorial {...props}/>)),
    tabBarOptions:{
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: "#fff",
            height: 4
        },
        style:{
            backgroundColor: "#0000"
        },
        labelStyle:{
            fontSize: 20,
            fontWeight: "bold"
        },
        tabStyle:{
            borderBottomColor: "#fff"
        }
    }
})


const auth = createStackNavigator({
    Start,
    login: Login,
    passwordReset: PasswordReset,
    signup: Reg_DriveCode,
    tutorial,
    enterDetails:Reg_UserData
}, {
        headerMode: "none"
    });

const main = createStackNavigator({
    Account,
    Bereiche,
    ExamView,
    Home,
    TrainingView
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
    Account
},{
    swipeEnabled: true,
    tabBarComponent: (props=> (<TabBar {...props}/>)),
    tabBarOptions:{
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: "#fff",
            height: 2
        },
        labelStyle:{
            fontSize: 18,
            marginBottom: 0,
            fontWeight: "bold"
        },
        tabStyle:{
            borderBottomColor: "#fff"
        }
    }
})


const rootNavigator = createSwitchNavigator({
    auth,
    main,
    learning,
    home,
    tutorial
}, {
        initialRouteName: "home"
    });

export const Router = createAppContainer(rootNavigator);

// export const sceneReducer = (state = {}, { type }) => {
//     switch (type) {
//         case LOGIN_SUCCESS: NavigationService.navigate('Home');
//             return state;
//         case LOGIN_FAILED: NavigationService.navigate('Login');
//             return state;
//         case SIGNED_OUT: NavigationService.navigate('Login');
//             return state;
//         case START_SIGN_IN: NavigationService.navigate('AuthLoading');
//             return state;
//         case START_SIGN_IN_WITHOUT_CREDENTIAL: NavigationService.navigate('AuthLoading');
//             return state;
//         case SET_CURRENT_MODULE: NavigationService.navigate('category');
//             return state;
//         case SELECT_CURRENT_SUBMODULE: NavigationService.navigate('info');
//             return state;
//         case CONTINUE_MODULE_LEARNING: NavigationService.navigate('question');
//         case LEARN_FALSE_QUESTIONS_FROM_MODULE: NavigationService.navigate('question');
//         case CONTINUE_SECTION_LEARNING: NavigationService.navigate('question');
//             return state;
//         case INIT_EXAM: NavigationService.navigate('test');
//             return state;
//         case FINISH_EXAM: NavigationService.navigate('testStatistics');
//             return state;
//         case GET_RESULT_STATS_FOR_MODULE:
//             NavigationService.navigate('testResult');
//             return state;
//         default:
//             return state;
//     }
// }
