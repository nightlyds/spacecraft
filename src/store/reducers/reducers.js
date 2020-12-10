import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const reducers = combineReducers({ dataReducer, loadingReducer, errorReducer});

export default reducers;