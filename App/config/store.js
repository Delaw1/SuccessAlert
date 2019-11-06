import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage  from '@react-native-community/async-storage';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['categories', 'users', 'error']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, loggerMiddleware))
    let persistor = persistStore(store)
    return { store, persistor }
}