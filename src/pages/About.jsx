import ButtonGoBack from '../components/ui/buttons/ButtonGoBack'
import styles from './About.module.scss'

const About = () => {
	return (
		<div className={styles.aboutWrap}>
			<p className={styles.aboutText}>
				We tried to collect all the simple recipes for the most delicious,
				affordable, popular and gourmet dishes. A detailed step-by-step
				description of the cooking technology will help you not only quickly and
				easily prepare the dish you like, but also easily master the basics of
				cooking.
			</p>
			<ButtonGoBack />
		</div>
	)
}

export default About
