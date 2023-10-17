import Preloader from '../components/screens/Preloader'
import ButtonGoBack from '../components/ui/buttons/ButtonGoBack'
import styles from './CategoryDescription.module.scss'
import { useLocation } from 'react-router-dom'

const CategoryDescription = () => {
	const location = useLocation()
	const { titleCategory, descriptionCategory, imageCategory } = location.state
	return (
		<>
			<div className={styles.cardDescriptionWrap}>
				<img
					className={styles.cardDescriptionImage}
					src={imageCategory}
					alt={`Сategory image: ${titleCategory}`}
				/>
				<h2 className={styles.cardDescriptionTitle}>{titleCategory}</h2>
				<p className={styles.cardDescriptionText}>{descriptionCategory}</p>
				<div className={styles.btnGoBackWrap}>
					<ButtonGoBack />
				</div>
			</div>
		</>
	)
}

export default CategoryDescription
