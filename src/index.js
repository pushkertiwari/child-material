import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';
import App from './App';
import history from './history';
import SimpleForm from './Forms/simpleform.jsx';
import * as serviceWorker from './serviceWorker';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

ReactDOM.render(<Fragment>
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={"/"} component={App} />
                <Route exact path={"/form"} component={SimpleForm} />
            </Switch>
        </Router>
    </Provider>
</Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
