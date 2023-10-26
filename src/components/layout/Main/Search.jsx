import { useEffect, useState } from 'react'
import styles from './Search.module.scss'

const Search = props => {
	const { searchCategory = Function.prototype } = props
	const [value, setValue] = useState('')

	const onChange = event => {
		const value = event.target.value
		setValue(value)
	}

	const handleKey = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			searchCategory(value)
		}
	}

	useEffect(() => {
		searchCategory(value)
	}, [value])

	return (
		<form className={styles.searchWrap}>
			<input
				className={styles.searchInputForm}
				type="search"
				placeholder="Category search..."
				color="red"
				value={value}
				onChange={onChange}
				onKeyDown={handleKey}
			/>
		</form>
	)
}

export default Search
