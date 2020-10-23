import {createStore, combineReducers} from 'redux';
import foodReducer from '../reducer/foodReducers';

// const rootReducer = combineReducers({
//     Foodreducer: foodReducer
// })

const configureStore = () => createStore(foodReducer);

export default configureStore;