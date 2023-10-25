import { Link } from 'react-router-dom'
import styles from './CategoryItem.module.scss'

const CategoryItem = props => {
	const {
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
			<p className={styles.categoryCardDescription}>
				{descriptionCategory.slice(0, 52)}
				<Link
					to={`/category/${titleCategory}/Description`}
					state={{
						titleCategory: titleCategory,
						descriptionCategory: descriptionCategory,
						imageCategory: imageCategory
					}}
					className={styles.categoryCardButtonLinkCategoryDescription}
				>
					...more
				</Link>
			</p>
			<Link
				to={`/category/${titleCategory}`}
				className={styles.categoryCardButtonLinkCategory}
			>
				Watch category
			</Link>
		</div>
	)
}

export default CategoryItem
