import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preLoadedState) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );

  return store;  
}
