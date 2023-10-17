import { Link } from 'react-router-dom'
import styles from './Meal.module.scss'
import { useParams } from 'react-router-dom'

const Meal = props => {
	const { strMeal: titleMeal, idMeal, strMealThumb: imageMeal } = props
	const { name } = useParams()

	return (
		<div className={styles.mealCardWrap}>
			<img
				className={styles.mealCardImage}
				src={imageMeal}
				alt={`Сategory image: ${titleMeal}`}
			/>
			<h2 className={styles.categoryCardTitle}>{titleMeal}</h2>
			<Link
				to={`/meal/recipe/${idMeal}`}
				className={styles.mealCardButtonLinkMeal}
			>
				Watch recipe
			</Link>
		</div>
	)
}

export default Meal


