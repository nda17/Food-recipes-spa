import axios from 'axios'
import { useEffect, useState } from 'react'
import CategoryList from '../components/layout/Main/CategoryList'
import Search from '../components/layout/Main/Search'
import Preloader from '../components/screens/Preloader'
import API_URL from '../config'

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
			{loading ? (
				<Preloader />
			) : (
				<>
					<Search searchCategory={searchCategory} />
					<CategoryList filteredCategories={filteredCategories} />
				</>
			)}
		</>
	)
}

export default Home
