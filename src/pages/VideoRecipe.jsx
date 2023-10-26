import { useLocation, useParams } from 'react-router-dom'
import styles from './VideoRecipe.module.scss'

const VideoRecipe = () => {
	const { id } = useParams()
	const location = useLocation()
	const { strYoutube } = location.state

	return (
		<>
			<div className={styles.embedContainer}>
				<iframe
					title={id}
					src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
					allowFullScreen
				></iframe>
			</div>
		</>
	)
}

export default VideoRecipe
