import dataReducer from "../store/reducers/dataReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import errorReducer from "../store/reducers/errorReducer";
import launchesReducer from '../store/reducers/launchesReducer'
import oneLaunchReducer from '../store/reducers/oneLaunchReducer'
import initialState from "../store/initialState";

describe("Reducers tests", () => {
  it("dataReducer test", () => {
    const action = {
      type: "DATA",
      data: {0: "0", 1: "1" },
    };

    expect(dataReducer(initialState, action)).toEqual({
      0: "0",
      1: "1",
    });
  });

  it("loadingReducer test", () => {
    const action = {
      type: "LOADING",
      loading: true,
    };

    expect(loadingReducer(initialState, action)).toEqual(true);
  });

  it("errorReducer test", () => {
    const action = {
      type: "ERROR",
      error: true,
    };

    expect(errorReducer(initialState, action)).toEqual(true);
  });

  it("launchesReducer test", () => {
    const action = {
      type: "LAUNCHES",
      launches: {0: '0', 1: '1'}
    }

    expect(launchesReducer(initialState, action)).toEqual({0: '0', 1: '1'})
  })

  it("oneLaunch test", () => {
    const action = {
      type: "ONE_LAUNCH",
      oneLaunch: {0: '0', 1: '1'}
    }

    expect(oneLaunchReducer(initialState, action)).toEqual({0: '0', 1: '1'})
  })

  it("dataReducer should return default value", () => {
    expect(dataReducer(undefined, {})).toEqual(initialState.data);
  });

  it("loadingReducer should return default value", () => {
    expect(loadingReducer(undefined, {})).toEqual(initialState.loading);
  });

  it("errorReducer should return default value", () => {
    expect(errorReducer(undefined, {})).toEqual(initialState.error);
  });

  it("launchesReducer should return default value", () => {
    expect(launchesReducer(undefined, {})).toEqual(initialState.launches)
  })

  it("oneLaunchReducer should return default value", () => {
    expect(oneLaunchReducer(undefined, {})).toEqual(initialState.oneLaunch)
  })
});
