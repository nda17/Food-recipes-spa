import styles from './CategoryList.module.scss'
import CategoryItem from './CategoryItem'

const CategoryList = props => {
	const { categories = [] } = props


	if (!categories.length) {
		return (
			<p className={styles.titleNotFound}>
				ERROR: 404 - NOT FOUND!
				<br />
				Please, try later.
				<br />
			</p>
		)
	}

	return categories.map(category => (
		<CategoryItem key={category.idCategory} {...category} />
	))
}

export default CategoryList
