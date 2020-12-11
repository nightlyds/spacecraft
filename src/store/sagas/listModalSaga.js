import oneLaunchAction from '../actionCreators/oneLaunchAction'
import loadingAction from '../actionCreators/loadingAction'
import errorAction from '../actionCreators/errorAction'
import axios from 'axios'
import { put, call, takeEvery } from 'redux-saga/effects';

export function apiCallOneLaunch(url){
    return axios.get(url);
}

export function* workerOneLaunch(action){
    yield put(loadingAction(false))
    yield put(errorAction(false))
    try{
        const request = yield call(apiCallOneLaunch, `https://api.spacexdata.com/v3/launchpads/${action.id}`)
        yield put(oneLaunchAction(request))
    }
    catch{
        yield put(errorAction(true))
    }
    yield put(loadingAction(true))
}

export function* watchOneLaunch(){
    yield takeEvery("LOAD_UP_ONE_LAUNCH", workerOneLaunch)
}