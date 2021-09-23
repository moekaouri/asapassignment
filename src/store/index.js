import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import HomeReducer from '../screens/HomeListView/reducer';
import ModelReducer from '../screens/ModelListView/reducer';
import ModelDetailsReducer from '../screens/ModelDetailsView/reducer';
import EditReducer from '../screens/EditModelView/reducer';

const Reducers = combineReducers({
  // write all the reduceres here
  homeReducer: HomeReducer,
  modelReducer: ModelReducer,
  modelDetailsReducer: ModelDetailsReducer,
  editReducer: EditReducer
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const Store = createStoreWithMiddleware(Reducers);

export default Store;