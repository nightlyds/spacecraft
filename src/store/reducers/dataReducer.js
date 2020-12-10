import initialState from '../initialState'

const dataReducer = (state = initialState.data, action) => {
    switch(action.type){
        case "DATA":
            return action.data
        default:
            return state
    }
}

export default dataReducer;