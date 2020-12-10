import "regenerator-runtime/runtime";
import { callApi, watchData, workerData } from '../store/saga'
import { call, takeEvery } from 'redux-saga/effects'
import { expectSaga } from "redux-saga-test-plan";
import loadingAction from "../store/actionCreators/loadingAction";
import errorAction from "../store/actionCreators/errorAction";
import dataAction from "../store/actionCreators/dataAction";
import reducers from '../store/reducers/reducers'

describe("Saga tests", () => {
    it("Saga watcher test", () => {
        const saga = watchData();
        expect(saga.next().value).toEqual(takeEvery("LOAD_UP", workerData))
        expect(saga.next().done).toBeTruthy();
    })

    it("Saga worker test", () => {
        return expectSaga(workerData, callApi)
        .provide([
            [call(callApi, 'https://api.spacexdata.com/v3/rockets'), 3]
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