import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
	return (
		<>
			<p className={styles.titleNotFound}>
				ERROR: 404 - NOT FOUND!
				<br />
				Страница не существует.
				<br />
				Перейти на
				<Link to='/' className={styles.titleNotFoundLink}>
					ГЛАВНУЮ СТРАНЦУ
				</Link>
			</p>
		</>
	)
}

export default NotFound
