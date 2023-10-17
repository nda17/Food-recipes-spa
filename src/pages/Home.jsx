import { useState, useEffect } from 'react'
import API_URL from '../config'
import Preloader from '../components/screens/Preloader'
import CategoryList from '../components/layout/Main/CategoryList'
import Search from '../components/layout/Main/Search'
import axios from 'axios'

const Home = () => {
	const [allCategories, setAllCategories] = useState([])
	const [filteredCategories, setFilteredCategories] = useState([])
	const [loading, setLoading] = useState(true)

	const searchCategory = string => {
		// setLoading(true)
		setFilteredCategories(
			allCategories.filter(item => {
				return item.strCategory.toLowerCase().includes(string.toLowerCase())
			})
		)
		// setLoading(false)
	}

	useEffect(
		function getAllCategories() {
			axios
				.get(API_URL + 'categories.php')
				.then(response => {
					setAllCategories(response.data.categories)
					!filteredCategories.length
						? setFilteredCategories(allCategories)
						: filteredCategories
					setLoading(false)
				})
				.catch(error => {
					console.error(error)
					setLoading(false)
				})
		},
		[filteredCategories]
	)
	return (
		<>
			<Search searchCategory={searchCategory} />
			{loading ? (
				<Preloader />
			) : (
				<CategoryList filteredCategories={filteredCategories} />
			)}
		</>
	)
}

export default Home
