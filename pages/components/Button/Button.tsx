/** @format */
import styles from './style.module.scss';

export default function Button(props) {
	return (
		<button className={styles.button} onClick={() => alert('clicked')}>
			click me
		</button>
	);
}
