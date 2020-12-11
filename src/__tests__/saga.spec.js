import "regenerator-runtime/runtime";
import {
  apiCallSpacecraft,
  watchSpacecraft,
  workerSpacecraft,
} from "../store/sagas/spacecraftSaga";
import {
  apiCallLaunches,
  watchLaunches,
  workerLaunches,
} from "../store/sagas/launchesSaga";
import {
  apiCallOneLaunch,
  watchOneLaunch,
  workerOneLaunch,
} from "../store/sagas/oneLaunchSaga";
import { call, takeEvery } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import dataAction from "../store/actionCreators/dataAction";
import launchesAction from "../store/actionCreators/launchesAction";
import oneLaunchAction from "../store/actionCreators/oneLaunchAction";
import loadingAction from "../store/actionCreators/loadingAction";
import errorAction from "../store/actionCreators/errorAction";
import dataReducer from "../store/reducers/dataReducer";
import launchesReducer from "../store/reducers/launchesReducer";
import oneLaunchReducer from "../store/reducers/oneLaunchReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import errorReducer from "../store/reducers/errorReducer";
import { combineReducers } from "redux";

describe("Sagas tests", () => {
  describe("Spacecraft saga test", () => {
    it("Saga watcher test", () => {
      const saga = watchSpacecraft();
      expect(saga.next().value).toEqual(takeEvery("LOAD_UP", workerSpacecraft));
      expect(saga.next().done).toBeTruthy();
    });

    it("Saga worker test", () => {
      const reducers = combineReducers({
        dataReducer,
        loadingReducer,
        errorReducer,
      });
      return expectSaga(workerSpacecraft)
        .provide([
          [call(apiCallSpacecraft, "https://api.spacexdata.com/v3/rockets"), 3],
        ])
        .withReducer(reducers)

        .put(loadingAction(false))
        .put(errorAction(false))
        .put(dataAction(3))
        .put(loadingAction(true))

        .hasFinalState({
          dataReducer: 3,
          loadingReducer: true,
          errorReducer: false,
        })

        .silentRun();
    });
  });
  describe("Launches saga test", () => {
    it("Saga watcher test", () => {
      const saga = watchLaunches();
      expect(saga.next().value).toEqual(
        takeEvery("LOAD_UP_LAUNCHES", workerLaunches)
      );
      expect(saga.next().done).toBeTruthy();
    });

    it("Saga worker test", () => {
      const reducers = combineReducers({
        launchesReducer,
        loadingReducer,
        errorReducer,
      });
      return expectSaga(workerLaunches)
        .provide([
          [call(apiCallLaunches, "https://api.spacexdata.com/v3/launches"), 17],
        ])
        .withReducer(reducers)

        .put(loadingAction(false))
        .put(errorAction(false))
        .put(launchesAction(17))
        .put(loadingAction(true))

        .hasFinalState({
          launchesReducer: 17,
          loadingReducer: true,
          errorReducer: false,
        })

        .silentRun();
    });
  });
  describe("One Launch saga test", () => {
    it("Saga watcher test", () => {
      const saga = watchOneLaunch();
      expect(saga.next().value).toEqual(
        takeEvery("LOAD_UP_ONE_LAUNCH", workerOneLaunch)
      );
      expect(saga.next().done).toBeTruthy();
    });

    it("Saga worker test", () => {
      const reducers = combineReducers({
        oneLaunchReducer,
        loadingReducer,
        errorReducer,
      });

      const action = {
        id: "08",
      };

      return expectSaga(workerOneLaunch, action)
        .provide([
          [
            call(
              apiCallOneLaunch,
              `https://api.spacexdata.com/v3/launches/${action.id}`), "08"],
            ])

        .withReducer(reducers)

        .put(loadingAction(false))
        .put(errorAction(false))
        .put(oneLaunchAction("08"))
        .put(loadingAction(true))

        .hasFinalState({
          oneLaunchReducer: "08",
          loadingReducer: true,
          errorReducer: false,
        })

        .silentRun();
    });
  });
});
