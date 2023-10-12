import { useEffect } from 'react'
import CustomLink from '../../ui/links/CustomLink'
import cn from 'clsx'
import styles from './Header.module.scss'
import Logo from '../../../public/images/YBS-white.svg'
import HamburgerMenu from './HamburgerMenu'
import MobileMenu from './MobileMenu'
import useToggle from '../../../hooks/useToggle'

const Header = () => {
	const [isVisible, toggleVisible] = useToggle(true)
	useEffect(() => {
		//Animation logo
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.rotateEffect'
			).style.transform = `rotate3d(1, 1, 1, ${count}deg)`
		}, 40)
	}, [])
	return (
		<header className={cn(styles.header, 'container')}>
			<nav className={styles.headerNav}>
				<div className={styles.headerWrap}>
					<a className={styles.headerLogoWrap} href='#)' id='header'>
						<img
							className={cn(styles.headerLogoIcon, 'rotateEffect')}
							src={Logo}
							alt='Logo'
						/>
					</a>
					<p className={styles.headerCompanyNameText}>TITLE</p>
					<div className={styles.headerListLinkWrap}>
						<ul className={styles.CustomLinkWrap}>
							<li>
								<CustomLink to='/' className={styles.CustomLink}>
									Home
								</CustomLink>
							</li>
						</ul>
						<ul className={styles.CustomLinkWrap}>
							<li>
								<CustomLink to='/about' className={styles.CustomLink}>
									About
								</CustomLink>
							</li>
						</ul>
						<ul className={styles.CustomLinkWrap}>
							<li>
								<CustomLink to='/contacts' className={styles.CustomLink}>
									Contacts
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
