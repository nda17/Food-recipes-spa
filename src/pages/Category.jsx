import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealList from '../components/layout/Main/MealList'
import Preloader from '../components/screens/Preloader'
import ButtonGoBack from '../components/ui/buttons/ButtonGoBack'
import API_URL from '../config'
import styles from './Category.module.scss'

//TODO: ? PATH
const Category = () => {
	const { name } = useParams()
	const [meals, setMeals] = useState([])

	useEffect(
		function getFilteredCategory() {
			axios
				.get(API_URL + 'filter.php?c=' + name)
				.then(response => setMeals(response.data.meals))
				.catch(error => {
					console.error(error)
				})
		},
		[name]
	)
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
