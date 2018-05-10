import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

// import { createStore } from 'redux'
// import todoApp from './reducers'
// const store = createStore(todoApp)

// const store = createStore(todoApp, window.STATE_FROM_SERVER)