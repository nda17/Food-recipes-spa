import cn from 'clsx'
import { useEffect } from 'react'
import useToggle from '../../../hooks/useToggle'
import Logo from '../../../public/images/catering.png'
import CustomLink from '../../ui/links/CustomLink'
import HamburgerMenu from './HamburgerMenu'
import styles from './Header.module.scss'
import MobileMenu from './MobileMenu'

const Header = () => {
	const [isVisible, toggleVisible] = useToggle(true)

	useEffect(() => {
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count++
			document.querySelector(
				'.rotateEffectHeader'
			).style.transform = `rotate(${count}deg)`
		}, 40)
	}, [])

	return (
		<header className={cn(styles.header, 'container')}>
			<nav className={styles.headerNav}>
				<div className={styles.headerWrap}>
					<a className={styles.headerLogoWrap} href="#)" id="header">
						<img
							className={cn(styles.headerLogoIcon, 'rotateEffectHeader')}
							src={Logo}
							alt="Logo"
						/>
					</a>
					<p className={styles.headerCompanyNameText}>FOOD RECIPIES</p>
					<div className={styles.headerListLinkWrap}>
						<ul className={styles.CustomLinkWrap}>
							<li>
								<CustomLink to="/" className={styles.CustomLink}>
									Home
								</CustomLink>
							</li>
						</ul>
						<ul className={styles.CustomLinkWrap}>
							<li>
								<CustomLink to="/about" className={styles.CustomLink}>
									About
								</CustomLink>
							</li>
						</ul>
					</div>
					<HamburgerMenu isVisible={isVisible} toggleVisible={toggleVisible} />
					<MobileMenu isVisible={isVisible} toggleVisible={toggleVisible} />
				</div>
			</nav>
		</header>
	)
}

export default Header
