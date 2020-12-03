/** @format */
import Head from 'next/head';
import Note from './components/note';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<script
					src='https://kit.fontawesome.com/e2169f0192.js'
					crossOrigin='anonymous'></script>
			</Head>
			<button className='add-btn'>
				<i className='fas fa-plus'></i> Add Note
			</button>

			<div className='notes-container'>
				<Note />
			</div>
		</div>
	);
}
