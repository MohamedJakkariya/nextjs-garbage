/** @format */

export default function Note() {
	return (
		<div className='note-box'>
			<div className='header'>
				<i className='far fa-edit'></i>
				<i className='far fa-trash-alt'></i>
			</div>
			<textarea className='text-input' name='note' cols={30}></textarea>
		</div>
	);
}
