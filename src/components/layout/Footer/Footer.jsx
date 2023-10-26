import cn from 'clsx'
import { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import Logo from '../../../public/images/catering.png'
import styles from './Footer.module.scss'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	useEffect(() => {
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.rotateEffectFooter'
			).style.transform = `rotate(${count}deg)`
		}, 40)
	}, [])

	return (
		<footer className={cn(styles.footer, 'container')}>
			<nav className={styles.footerNav}>
				<div className={styles.footerWrap}>
					<a className={styles.footerLogoWrap} href="#0">
						<img
							className={cn(styles.footerLogoIcon, 'rotateEffectFooter')}
							src={Logo}
							alt="Logo"
						/>
					</a>
					<div className={styles.footerInfoTextWrap}>
						<p className={styles.footerInfoTextFirst}>{currentYear}</p>
						<p className={styles.footerInfoTextSecond}>All rights reserved</p>
					</div>
					<div className={styles.footerIconWrap}>
						<a
							href="https://github.com/nda17"
							target="_blank"
							className={styles.footerIconLink}
							rel="noreferrer"
						>
							<BsGithub className={styles.footerLinkIcon} />
						</a>
					</div>
				</div>
			</nav>
		</footer>
	)
}

export default Footer
