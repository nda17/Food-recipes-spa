import { useRef } from 'react'
import CustomLink from '../../ui/links/CustomLink'
import useClickOutside from '../../../hooks/useClickOutside'
import styles from './MobileMenu.module.scss'
import Logo from '../../../public/images/catering.png'

const MobileMenu = props => {
	const { isVisible, toggleVisible = Function.prototype } = props //Состояние показан бургер или стрелка (открыто мобильное меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, toggleVisible) //Закрытие мобильного меню при клике вне его блока
	return (
		!isVisible && (
			<article className={styles.mobileMenu} ref={mobileMenuRef}>
				<img className={styles.mobileMenuLogo} src={Logo} alt='Logo image' />
				<div className={styles.mobileMenuCustomLinkWrapper}>
					<CustomLink
						to='/'
						className={styles.mobileMenuCustomLink}
						onClick={toggleVisible}
					>
						Home
					</CustomLink>
					<CustomLink
						to='/about'
						className={styles.mobileMenuCustomLink}
						onClick={toggleVisible}
					>
						About
					</CustomLink>
				</div>
			</article>
		)
	)
}

export default MobileMenu
