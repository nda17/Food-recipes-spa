import styles from './CategoryList.module.scss'

const CategoryItem = props => {
	const {
		idCategory: id,
		strCategory: titleCategory,
		strCategoryThumb: imageCategory,
		strCategoryDescription: descriptionCategory
	} = props
	return (
		<div className={styles.categoryCardWrap}>
			<img
				className={styles.categoryCardImage}
				src={imageCategory}
				alt={`Сategory image: ${titleCategory}`}
			/>
			<h2 className={styles.categoryCardTitle}>{titleCategory}</h2>
			<p className={styles.categoryCardDescription}>{descriptionCategory}</p>
			<button className={styles.categoryCardButtonLinkCategory}>
				Watch category
			</button>
		</div>
	)
}

export default CategoryItem
