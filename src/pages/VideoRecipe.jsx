import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styles from './VideoRecipe.module.scss'

const VideoRecipe = () => {
	const { id } = useParams()
	const location = useLocation()
	const { strYoutube } = location.state

	// const [videoRecipe, setVideoRecipe] = useState(false)

	// const { strArea: area } = meal[0]

	// useEffect(
	// 	function getMealById() {
	// 		axios
	// 			.get(API_URL + 'lookup.php?i=' + id)
	// 			.then(response => setRecipe(response.data.meals[0]))
	// 			.catch(error => {
	// 				console.error(error)
	// 			})
	// 	},
	// 	[id]
	// )
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
