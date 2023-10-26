import { useNavigate } from 'react-router-dom'
import styles from './ButtonGoBack.module.scss'

const ButtonGoBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	return (
		<button className={styles.btnGoBack} onClick={goBack}>
			Back
		</button>
	)
}

export default ButtonGoBack
