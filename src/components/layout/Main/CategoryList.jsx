import { Navigate } from 'react-router-dom'
import CategoryItem from './CategoryItem'


const CategoryList = props => {
	const { filteredCategories = [] } = props

	// if (!filteredCategories.length) {
	// 	return <Navigate to='*' />
	// }

	return filteredCategories.map(category => (
		<CategoryItem key={category.idCategory} {...category} />
	))
}

export default CategoryList
