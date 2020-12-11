import { watchSpacecraft } from './spacecraftSaga'
import { watchLaunches } from './listSaga'
import { watchOneLaunch } from './listModalSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        watchSpacecraft(),
        watchLaunches(),
        watchOneLaunch()
    ])
}