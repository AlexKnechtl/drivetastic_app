import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {  } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import firebase from "firebase";
import { createLogger } from 'redux-logger';
import { authReducer, AuthState } from './auth/authReducer';
import { all } from 'redux-saga/effects';
import { authSagas } from './auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVJ-y5x4Ov4Htj6X_iwMoTf1Xn0QxKNwU",
  authDomain: "drivetastic-cb039.firebaseapp.com",
  databaseURL: "https://drivetastic-cb039.firebaseio.com",
  projectId: "drivetastic-cb039",
  storageBucket: "",
  messagingSenderId: "463583286714",
  appId: "1:463583286714:web:239408600161314f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export interface StateType{
    auth: AuthState,
}

const reducers = {
    auth: authReducer,
}

const allSagas = [...authSagas];


export function configureStore(){
    var otherReducers={};
    var otherSagas = [];
    const middleware = [];
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);
    
    if(process.env.NODE_ENV !== "production")
        middleware.push(createLogger());
    const allReducers = {...reducers, ...otherReducers};

    const store = createStore(combineReducers(allReducers), applyMiddleware(...middleware));
    function* rootSagas(){
        yield all(allSagas);
    }
    sagaMiddleware.run(rootSagas);
    return store;
}