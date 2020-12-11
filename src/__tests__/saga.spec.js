import "regenerator-runtime/runtime";
import { apiCallSpacecraft, watchSpacecraft, workerSpacecraft } from '../store/sagas/spacecraftSaga'
import { call, takeEvery } from 'redux-saga/effects'
import { expectSaga } from "redux-saga-test-plan";
import loadingAction from "../store/actionCreators/loadingAction";
import errorAction from "../store/actionCreators/errorAction";
import dataAction from "../store/actionCreators/dataAction";
import reducers from '../store/reducers/reducers'

describe("Saga tests", () => {
    it("Saga watcher test", () => {
        const saga = watchSpacecraft();
        expect(saga.next().value).toEqual(takeEvery("LOAD_UP", workerSpacecraft))
        expect(saga.next().done).toBeTruthy();
    })

    it("Saga worker test", () => {
        return expectSaga(workerSpacecraft, apiCallSpacecraft)
        .provide([
            [call(apiCallSpacecraft, 'https://api.spacexdata.com/v3/rockets'), 3]
        ])
        .withReducer(reducers)

        .put(loadingAction(false))
        .put(errorAction(false))
        .put(dataAction(3))
        .put(loadingAction(true))

        .hasFinalState({
            dataReducer: 3,
            loadingReducer: true,
            errorReducer: false
        })

        .silentRun()
    })
})