/** @format */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Note from './components/note';

export default function Home() {
	const [notes, setNotes] = useState(['', '']);

	useEffect(() => {
		console.log(notes);
	}, [notes]);

	const hanldeDeleteButtonClick = (i) => {
		const result = notes.filter((item, index) => i !== index);
		setNotes(result);
	};

	const hanldeAddButtonClick = () => setNotes((notes) => [...notes, '']);

	const hanldeDescriptionChange = (text, index) => {
		notes[index] = text;
		setNotes(notes);
		console.log(notes);
	};

	return (
		<div className='container'>
			<Head>
				<script
					src='https://kit.fontawesome.com/e2169f0192.js'
					crossOrigin='anonymous'></script>
			</Head>
			<div className='container-header'>
				<p></p>
				<button onClick={hanldeAddButtonClick} className='add-btn'>
					<i className='fas fa-plus'></i> Add Note
				</button>
			</div>

			<div className='notes-container'>
				{notes.map((note, index) => (
					<Note
						key={index}
						description={note}
						onDelete={hanldeDeleteButtonClick}
						index={index}
						onDescription={hanldeDescriptionChange}
					/>
				))}
			</div>
		</div>
	);
}
