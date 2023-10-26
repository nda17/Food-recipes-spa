import CategoryItem from './CategoryItem'

const CategoryList = props => {
	const { filteredCategories = [] } = props

	return filteredCategories.map(category => (
		<CategoryItem key={category.idCategory} {...category} />
	))
}

export default CategoryList
