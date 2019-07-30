import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

//Views
import { Account, Bereiche, ExamView, Home, TrainingView } from './src/views/App'
import { AccountSettings, AGB, Impressum, Languages, Modules } from './src/views/Settings'
import { Exam, ExamStatistics, Question } from './src/views/Learning'
import { Login, Reg_DriveCode, Reg_Tutorial, Reg_UserData, Start } from './src/views/Auth'

//Redux
//import { } from "core";

const LearningNavigator = createSwitchNavigator({
    testScene: {
        screen: TestScene
    },
    testResultScene: createStackNavigator({
        testStatistics: {
            screen: TestStatistics
        },
        testResult: {
            screen: TestResultScene
        },
        pdfScene: {
            screen: PdfScene
        },
    }, { headerMode: 'none' })
},
    {
        backBehavior: "none"
    }
);

const AppStack = createStackNavigator({
    main: {
        screen: HomeScene
    },
    category: {
        screen: CategoryScene
    },
    statistics: {
        screen: StatisticScene
    },
    info: {
        screen: CategoryInfoScene
    },
    question: {
        screen: QuestionScene
    },
    questionView: {
        screen: QuestionViewScene
    },
    pdfScene: {
        screen: PdfScene
    },
    impressum: {
        screen: Impressum
    },
},
    {
        headerMode: 'none'
    });

const SettingsStack = createStackNavigator({
    SignIn: LoginScene,
    forgotPassword: ForgotPasswordScene
},
    {
        headerMode: 'none'
    });


const AuthStack = createStackNavigator({
    SignIn: LoginScene,
    forgotPassword: ForgotPasswordScene
},
    {
        headerMode: 'none'
    });



const rootNavigator = createSwitchNavigator({
    Login: AuthStack,
    Home: AppStack,
    AuthLoading: LoadingScene,
    test: questionTestNavigator
},
    {
        initialRouteName: 'AuthLoading'
    });

export default createAppContainer(rootNavigator);

export const sceneReducer = (state = {}, { type }) => {
    switch (type) {
        case LOGIN_SUCCESS: NavigationService.navigate('Home');
            return state;
        case LOGIN_FAILED: NavigationService.navigate('Login');
            return state;
        case SIGNED_OUT: NavigationService.navigate('Login');
            return state;
        case START_SIGN_IN: NavigationService.navigate('AuthLoading');
            return state;
        case START_SIGN_IN_WITHOUT_CREDENTIAL: NavigationService.navigate('AuthLoading');
            return state;
        case SET_CURRENT_MODULE: NavigationService.navigate('category');
            return state;
        case SELECT_CURRENT_SUBMODULE: NavigationService.navigate('info');
            return state;
        case CONTINUE_MODULE_LEARNING: NavigationService.navigate('question');
        case LEARN_FALSE_QUESTIONS_FROM_MODULE: NavigationService.navigate('question');
        case CONTINUE_SECTION_LEARNING: NavigationService.navigate('question');
            return state;
        case INIT_EXAM: NavigationService.navigate('test');
            return state;
        case FINISH_EXAM: NavigationService.navigate('testStatistics');
            return state;
        case GET_RESULT_STATS_FOR_MODULE:
            NavigationService.navigate('testResult');
            return state;
        default:
            return state;
    }
}