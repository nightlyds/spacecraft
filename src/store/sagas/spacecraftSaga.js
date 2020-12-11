import { call, put, takeEvery } from "redux-saga/effects";
import dataAction from '../actionCreators/dataAction';
import loadingAction from '../actionCreators/loadingAction';
import errorAction from '../actionCreators/errorAction'
import axios from "axios";

export function apiCallSpacecraft(url){
    return axios.get(url);
}

export function* workerSpacecraft(){
    yield put(loadingAction(false));
    yield put(errorAction(false));
    try{
        const request = yield call(apiCallSpacecraft, "https://api.spacexdata.com/v3/rockets");
        yield put(dataAction(request));
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(true));
}

export function* watchSpacecraft(){
    yield takeEvery("LOAD_UP", workerSpacecraft);
}