import { watchSpacecraft } from './spacecraftSaga'
import { watchLaunches } from './launchesSaga'
import { watchOneLaunch } from './oneLaunchSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        watchSpacecraft(),
        watchLaunches(),
        watchOneLaunch()
    ])
}