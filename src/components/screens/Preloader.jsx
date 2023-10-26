import { RotatingLines } from 'react-loader-spinner'
import styles from './Preloader.module.scss'

const Preloader = () => {
	return (
		<RotatingLines
			className={styles.spinnerWrapper}
			strokeColor="#ffd700"
			strokeWidth="5"
			animationDuration="0.75"
			width="50"
			visible={true}
		/>
	)
}

export default Preloader
