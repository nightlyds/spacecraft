import "regenerator-runtime/runtime";
import axios from "axios";
import { callApi } from "../store/saga";

jest.mock("axios");

describe("API tests", () => {
  it("Success API request", async () => {
    const data = {
      0: "0",
      1: "1",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(callApi("react")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("Error API request", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(callApi("react")).rejects.toThrow(errorMessage);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
