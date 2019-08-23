import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState('');
	return (
		<div class='post-form'>
			<div class='bg-primary p'>
				<h3>Leave a comment ..</h3>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault();
					addComment(postId, { text });
					setText('');
				}}
				class='form my-1'
			>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					name='text'
					cols='30'
					rows='5'
					placeholder='Add a comment'
					required
				/>
				<input type='submit' class='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
	postId: PropTypes.number.isRequired,
};

export default connect(
	null,
	{ addComment }
)(CommentForm);
