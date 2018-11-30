import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// Import Redux packages
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

// Import Reducers
import { reducer as servicesReducer } from './services/reducer';

const rootReducer = combineReducers({
    services: servicesReducer
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));