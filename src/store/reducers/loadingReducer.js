import initialState from '../initialState'

const loadingReducer = (state = initialState.loading, action) => {
    switch(action.type){
        case "LOADING":
            return action.loading
        default:
            return state
    }
}

export default loadingReducer;