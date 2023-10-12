import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
	return (
		<>
			<p className={styles.titleNotFound}>
				ERROR: 404 - NOT FOUND!
				<br />
				Страница не существует.
				<br />
				Перейти на <Link to='/'>ГЛАВНУЮ СТРАНЦУ</Link>
			</p>
		</>
	)
}

export default NotFoundPage
