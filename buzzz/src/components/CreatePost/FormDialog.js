import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import classes from './CreatePost.module.css';
import FullWidthTextField from './FullWidthTextField.js';
import UploadButtons from './UploadButtons';

const FormDialog = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (event) => {
		setOpen(false);
		// const newPost = {
		// 	userId: '',
		// 	desc: 'First Post',
		// 	img: '',
		// };

		// const createNewPost = useSelector((state) => state);
		// const dispatch = useDispatch();
		// dispatch(createNewPost(newPost));
		// console.log('NewPost', createNewPost);
	};

	return (
		<div>
			<Button
				variant='text'
				className={classes.buttonContainer}
				onClick={handleClickOpen}
			>
				<PhotoLibraryIcon className={classes.postBarIconItem} />
				<span className={classes.postBarIconText}>Photo</span>
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle alignSelf='center'>New Post</DialogTitle>
				<FullWidthTextField />
				<UploadButtons />
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Post</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FormDialog;
