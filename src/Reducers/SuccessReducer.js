import { actionTypes } from '../Actions/Actions'

export default (state = false, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}