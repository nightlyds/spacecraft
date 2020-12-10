import { call, put, takeEvery } from "redux-saga/effects";
import dataAction from './actionCreators/dataAction';
import loadingAction from './actionCreators/loadingAction';
import errorAction from './actionCreators/errorAction'
import axios from "axios";

export function callApi(url){
    return axios.get(url);
}

export function* workerData(){
    yield put(loadingAction(true));
    try{
        const request = yield call(callApi, "https://ll.thespacedevs.com/2.1.0/spacecraft/?format=json");
        yield put(dataAction(request));
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(false))
}

export function* watchData(){
    yield takeEvery("LOAD_UP", workerData);
}