import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { combinedReducer, rootSaga } from './services';

import './index.scss';

const persistConfig = {
    key: 'root',
    storage,
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const persistedReducer = persistReducer(persistConfig, combinedReducer);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </React.Fragment>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
