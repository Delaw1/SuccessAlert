import React from 'react';
import { Provider } from 'react-redux';
import persist from './App/config/store'
import Main from './App/Main'
import {PersistGate} from 'redux-persist/integration/react'

class App extends React.Component {
  render() {
    const persistStore = persist()
    console.log(persistStore.persistor)
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main/>
        </PersistGate>
      </Provider>
    );
  }
}


export default App;
