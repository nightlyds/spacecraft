import oneLaunchAction from '../actionCreators/oneLaunchAction'
import loadingAction from '../actionCreators/loadingAction'
import errorAction from '../actionCreators/errorAction'
import axios from 'axios'
import { put, call, takeLatest } from 'redux-saga/effects';

export function apiCallOneLaunch(url){
    return axios.get(url);
}

export function* workerOneLaunch(action){
    yield put(loadingAction(false))
    yield put(errorAction(false))
    try{
        const request = yield call(apiCallOneLaunch, `https://api.spacexdata.com/v3/launches/${action.id}`)
        yield put(oneLaunchAction(request))
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(true))
}

export function* watchOneLaunch(){
    yield takeLatest("LOAD_UP_ONE_LAUNCH", workerOneLaunch)
}