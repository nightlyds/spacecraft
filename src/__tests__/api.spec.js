import "regenerator-runtime/runtime";
import axios from "axios";
import { apiCallSpacecraft } from "../store/sagas/spacecraftSaga";

jest.mock("axios");

describe("API tests", () => {
  it("Success API request", async () => {
    const data = {
      0: "0",
      1: "1",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(apiCallSpacecraft("react")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("Error API request", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(apiCallSpacecraft("react")).rejects.toThrow(errorMessage);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
