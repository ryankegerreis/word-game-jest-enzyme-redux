import { combineReducers } from 'redux';
import success from './SuccessReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secredWordReducer';

export default combineReducers({
	success,
	guessedWords,
	secretWord
});
