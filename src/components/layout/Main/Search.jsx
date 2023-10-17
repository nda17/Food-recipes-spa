import { useState } from 'react'
import styles from './Search.module.scss'

const Search = props => {
const { searchCategory = Function.prototype } = props

    const [search, setSearch] = useState('')

	//Обработка нажатия клавиши Enter
	const handleKey = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			searchCategory(search) //Передача введенных данных в searchMovies
		}
	}

	return (
		<form className={styles.searchWrap}>
			<input
				className={styles.searchInputForm}
				type='search'
				placeholder='Category search...'
                color='red'
				value={search}
				onChange={event => setSearch(event.target.value)} //Обработчик на изменения данных в input и сохранение в state
				onKeyDown={handleKey} //Обработка нажатия Enter
			/>
			<button
				type='button'
				className={styles.searchButton}
				onClick={() => searchCategory(search)} //Обработка клика по кнопке Search
			>
				Search
			</button>
		</form>
	)
}

export default Search
