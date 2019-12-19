import {combineReducers} from 'redux';
import {repositoryReducer} from 'store/ducks/repository';

export const rootReducer = combineReducers({
  repository: repositoryReducer,
});
