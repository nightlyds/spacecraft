import dataAction from '../store/actionCreators/dataAction';
import loadingAction from '../store/actionCreators/loadingAction';
import errorAction from '../store/actionCreators/errorAction';
import loadUpAction from '../store/actionCreators/loadUpAction';

describe("Actions tests", () => {
    it("dataAction test", () => {
        const expectedAction = {
            type: 'DATA',
            data: {0: '0', 1 : '1' }
        }

        expect(dataAction({0: '0', 1 : '1' })).toEqual(expectedAction)
    })

    it("loadigAction test", () => {
        const expectedAction = {
            type: 'LOADING',
            loading: true
        }

        expect(loadingAction(true)).toEqual(expectedAction)
    })

    it("errorAction test", () => {
        const expectedAction = {
            type: 'ERROR',
            error: true
        }

        expect(errorAction(true)).toEqual(expectedAction)
    })
})