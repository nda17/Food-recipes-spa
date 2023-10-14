import styles from './CategoryList.module.scss'
import CategoryItem from './CategoryItem'

const CategoryList = props => {
	const { filteredCategories = [] } = props


	// if (!filteredCategories.length) {
	// 	return (
	// 		<p className={styles.titleNotFound}>
	// 			ERROR: 404 - NOT FOUND!
	// 			<br />
	// 			Please, try later.
	// 			<br />
	// 		</p>
	// 	)
	// }

	return filteredCategories.map(item => (
		<CategoryItem key={item.idCategory} {...item} />
	))
}

export default CategoryList
