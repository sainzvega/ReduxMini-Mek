import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preLoadedState) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );

  return store;  
}
