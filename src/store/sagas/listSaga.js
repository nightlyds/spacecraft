import launchesAction from '../actionCreators/launchesAction'
import loadingAction from '../actionCreators/loadingAction'
import errorAction from '../actionCreators/errorAction'
import axios from 'axios'
import { put, call, takeEvery } from 'redux-saga/effects';

export function apiCallLaunches(url){
    return axios.get(url);
}

export function* workerLaunches(){
    yield put(loadingAction(false))
    yield put(errorAction(false))
    try{
        const request = yield call(apiCallLaunches, 'https://api.spacexdata.com/v3/launches')
        yield put(launchesAction(request))
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(true))
}

export function* watchLaunches(){
    yield takeEvery("LOAD_UP_LAUNCHES", workerLaunches)
}