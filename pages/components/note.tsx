/** @format */

import { useState } from 'react';

export default function Note(props) {
	const [description, setDescription] = useState('');

	const handleDescriptionChange = (v) => {
		setDescription(v);
		props.onDescription(v, props.index);
	};

	return (
		<div className='note-box'>
			<div className='header'>
				<span className='far fa-edit'></span>
				<span
					className='far fa-trash-alt'
					onClick={() => props.onDelete(props.index)}></span>
			</div>
			<textarea
				className='text-input'
				onChange={(e) => handleDescriptionChange(e.target.value)}
				value={description}
				name='note'
				cols={30}></textarea>
		</div>
	);
}
