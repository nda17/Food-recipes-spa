import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import MealList from '../components/layout/Main/MealList'
import Preloader from '../components/screens/Preloader'
import ButtonGoBack from '../components/ui/buttons/ButtonGoBack'
import styles from './Category.module.scss'

const Category = () => {
	const { name } = useParams()
	const [meals, setMeals] = useState([])

	useEffect(() => {
		getFilteredCategory(name)
			.then(data => setMeals(data.meals))
			.catch(error => {
				console.error(error)
			})
	}, [name])

	return (
		<>
			{!meals.length ? (
				<Preloader />
			) : (
				<>
					<div className={styles.btnGoBackWrap}>
						<ButtonGoBack />
					</div>
					<MealList meals={meals} />
				</>
			)}
		</>
	)
}

export default Category
