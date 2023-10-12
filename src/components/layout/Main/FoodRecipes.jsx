import { useState, useEffect } from 'react'
import Preloader from '../../screens/Preloader'
import styles from './FoodRecipes.module.scss'
import cn from 'clsx'
import axios from 'axios'

const FoodRecipes = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(function getCategories() {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/categories.php/')
			.then(response => {
				response.data.categories && setCategories(response.data.categories)
				setLoading(false)
			})
			.catch(error => {
				console.error(error)
				setLoading(false)
			})
	}, [])
	return (
		<>
			<article>{loading && <Preloader />}</article>
		</>
	)
}

export default FoodRecipes
