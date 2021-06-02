import { combineReducers } from 'redux';
import entities from './entities';
import session from './session';
import errors from './errors_reducer';

export default combineReducers({
    entities,
    session,
    errors
});