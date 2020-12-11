import dataAction from '../store/actionCreators/dataAction';
import loadingAction from '../store/actionCreators/loadingAction';
import errorAction from '../store/actionCreators/errorAction';
import loadUpAction from '../store/actionCreators/loadUpAction';
import launchesAction from '../store/actionCreators/launchesAction'
import loadUpLaunchesAction from '../store/actionCreators/loadUpLaunchesAction'
import loadUpOneLaunchAction from '../store/actionCreators/loadUpOneLaunchAction'
import oneLaunchAction from '../store/actionCreators/oneLaunchAction'

describe("Actions tests", () => {
    it("dataAction test", () => {
        const expectedAction = {
            type: 'DATA',
            data: {0: '0', 1 : '1'}
        }

        expect(dataAction({0: '0', 1 : '1'})).toEqual(expectedAction)
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

    it("loadUpAction test", () => {
        const expectedAction = {
            type: 'LOAD_UP'
        }

        expect(loadUpAction()).toEqual(expectedAction)
    })

    it("launchesAction test", () => {
        const expectedAction = {
            type: 'LAUNCHES',
            launches: {0: '0', 1 : '1'}
        }

        expect(launchesAction({0: '0', 1 : '1'})).toEqual(expectedAction)
    })

    it("loadUpLaunchesAction test", () => {
        const expectedAction = {
            type: 'LOAD_UP_LAUNCHES'
        }

        expect(loadUpLaunchesAction()).toEqual(expectedAction)
    })

    it("loadUpOneLaunchAction test", () => {
        const expectedAction = {
            type: 'LOAD_UP_ONE_LAUNCH',
            id: 17
        }

        expect(loadUpOneLaunchAction(17)).toEqual(expectedAction)
    })

    it("oneLaunchAction test", () => {
        const expectedAction = {
            type: 'ONE_LAUNCH',
            oneLaunch: {0: '0', 1 : '1'}
        }

        expect(oneLaunchAction({0: '0', 1 : '1'})).toEqual(expectedAction)
    })
})