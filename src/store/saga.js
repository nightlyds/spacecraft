import { call, put, takeEvery } from "redux-saga/effects";
import dataAction from './actionCreators/dataAction';
import loadingAction from './actionCreators/loadingAction';
import errorAction from './actionCreators/errorAction'
import axios from "axios";

export function callApi(url){
    return axios.get(url);
}

export function* workerData(){
    yield put(loadingAction(false));
    yield put(errorAction(false));
    try{
        const request = yield call(callApi, "https://api.spacexdata.com/v3/rockets");
        yield put(dataAction(request));
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(true));
}

export function* watchData(){
    yield takeEvery("LOAD_UP", workerData);
}