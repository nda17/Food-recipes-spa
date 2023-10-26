import { GrTextAlignRight } from 'react-icons/gr'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = props => {
	const { isVisible, toggleVisible = Function.prototype } = props

	return (
		<div className={styles.hamburgerIconWrap}>
			<span className={styles.hamburgerButton} onClick={toggleVisible}>
				{isVisible ? (
					<GrTextAlignRight
						className={styles.GrTextAlignRight}
						color="#ffffff"
					/>
				) : (
					<HiOutlineChevronDown
						className={styles.HiOutlineChevronDown}
						color="#ffffff"
					/>
				)}
			</span>
		</div>
	)
}

export default HamburgerMenu
