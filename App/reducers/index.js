import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import alertReducer from './alert.reducer'
import {categoriesReducer, usersReducer} from './api.reducer'

const reducers = combineReducers({
    authReducer: authReducer,
    error: alertReducer,
    categories: categoriesReducer,
    users: usersReducer
});

export default reducers;