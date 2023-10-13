import { useState, useEffect } from 'react'
import Preloader from '../components/screens/Preloader'
import CategoryList from '../components/layout/Main/CategoryList'
import Search from '../components/layout/Main/Search'
import axios from 'axios'

const Home = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	const searchCategory = string => {
		const search = categories.filter(category => {
			return string.toLowerCase() === category.strCategory.toLowerCase()
		})
		setLoading(false)
		setCategories(search)
	}

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
			<article>
				<Search searchCategory={searchCategory} />
				{loading ? <Preloader /> : <CategoryList categories={categories} />}
			</article>
		</>
	)
}

export default Home
