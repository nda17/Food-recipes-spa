import API_URL from './config'
import axios from 'axios'

function getAllCategories() {
	// const response = await fetch(
	// 	'https://www.themealdb.com/api/json/v1/1/categories.php/'
	// )
	// return await response.json()
	return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php/')
}

// const getUserById = async (userId) => {
//   try {
//     const response = await axios.get(`/users?id=${userId}`)
//     return response.data

const getMealById = async mealId => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
	return await response.json()
}

const getFilteredCategory = async catName => {
	const response = await fetch(API_URL + 'filter.php?c=' + catName)
	return await response.json()
}

export { getMealById, getAllCategories, getFilteredCategory }
