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

    if(process.env.NODE_ENV !== "production") {
        if(module.hot) {
            module.hot.accept("../reducers/rootReducer", () => {
                 const newRootReducer = require("../reducers/rootReducer").default;
                 store.replaceReducer(newRootReducer);
            });
        }
    }

  return store;  
}
