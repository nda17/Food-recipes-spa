import ButtonGoBack from '../../ui/buttons/ButtonGoBack'
import Logo from '../../../public/images/YBS-white.svg'
import CookiePopup from '../../ui/modal/CookiePopup'
import { BsGithub } from 'react-icons/bs'
import styles from './Footer.module.scss'
import cn from 'clsx'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className={cn(styles.footer, 'container')}>
			<nav className={styles.footerNav}>
				<div className={styles.footerWrap}>
					<a className={styles.footerLogoWrap} href='#0'>
						<img className={styles.footerLogoIcon} src={Logo} alt='Logo' />
					</a>
					<div className={styles.footerInfoTextWrap}>
						<p
							className={styles.footerInfoTextFirst}
						>{`2022 - ${currentYear}`}</p>
						<p className={styles.footerInfoTextSecond}>All rights reserved</p>
					</div>
					<div className={styles.footerIconWrap}>
						<a
							href='https://github.com/nda17'
							target='_blank'
							className={styles.footerIconLink}
						>
							<BsGithub className={styles.footerLinkIcon} />
						</a>
					</div>
				</div>
			</nav>
			<CookiePopup />
			<ButtonGoBack />
		</footer>
	)
}

export default Footer
