import axios from 'axios'
import API_URL from '../config'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import styles from './Search.module.scss'

const Recipe = () => {
	const { id } = useParams()

	useEffect(
		function getMealById() {
			axios
				.get(API_URL + 'lookup.php?i=' + id)
				.then(response => console.log(response.data.meals))
				.catch(error => {
					console.error(error)
				})
		},
		[name]
	)


	return (
        <p>RESIPE PAGE</p>
	)
}

export default Recipe



