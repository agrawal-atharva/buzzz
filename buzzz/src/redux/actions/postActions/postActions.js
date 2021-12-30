import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const createNewPost = (newPost) => async (dispatch) => {
	const response = await axios.post('/post', newPost).catch((err) => {
		console.log(err);
	});
	dispatch({ type: ActionType.CREATE_NEW_POST, payload: response });
};
