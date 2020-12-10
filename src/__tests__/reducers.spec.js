import dataReducer from "../store/reducers/dataReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import errorReducer from "../store/reducers/errorReducer";
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

  it("dataReducer should return default value", () => {
    expect(dataReducer(undefined, {})).toEqual(initialState.data);
  });

  it("loadingReducer should return default value", () => {
    expect(loadingReducer(undefined, {})).toEqual(initialState.loading);
  });

  it("errorReducer should return default value", () => {
    expect(errorReducer(undefined, {})).toEqual(initialState.error);
  });
});
