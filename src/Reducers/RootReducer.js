import { combineReducers } from 'redux';
import success from './SuccessReducer';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
	success,
	guessedWords
});
