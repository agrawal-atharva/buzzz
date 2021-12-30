import { combineReducers } from 'redux';
import { userReducer } from './userReducer/currentUserReducer';
import { suggestionUsers } from './userReducer/suggestionUserReducer';

const rootReducer = combineReducers({
	currentUser: userReducer,
	suggestionUsers: suggestionUsers,
});

export default rootReducer;
