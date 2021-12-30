import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const suggestedUsers = (id) => async (dispatch) => {
	const response = await axios.get(`/user/${id}/suggestions`);
	console.log('Response', response);
	dispatch({ type: ActionType.GET_SUGGESTED_USER, payload: response.data });
};
