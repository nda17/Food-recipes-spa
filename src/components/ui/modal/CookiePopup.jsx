import { useState, useEffect } from 'react'
import { BiSolidCookie } from 'react-icons/bi'
import styles from './CookiePopup.module.scss'
import cn from 'clsx'

function CookiePopup() {
	const [addClass, setAddClass] = useState(false)
	const executeDataCookies = () => {
		if (document.cookie.includes('cookieData')) {
			return
		} else {
			setAddClass(true)
		}
	}
	const acceptBtnClick = () => {
		document.cookie =
			'cookieTITLE=cookieData; SameSite=Lax; max-age=' + 60 * 60 * 24 * 365
		setAddClass(false)
	}
	const declineBtnClick = () => {
		setAddClass(false)
	}
	useEffect(() => {
		executeDataCookies()
	}, [])
	return (
		<div className={cn(styles.cookiePopupWrap, addClass ? styles.show : '')}>
			<div className={styles.cookiePopupTitleWrap}>
				<BiSolidCookie
					className={styles.cookiePopupTitleIcon}
					color='#dd850b'
				/>
				<h2 className={styles.cookiePopupTitleText}>Cookies Consent</h2>
			</div>
			<p className={styles.cookiePopupText}>
				Мы используем cookie-файлы, чтобы получить статистику, с целью
				персонализации сервисов и предложений. Продолжая пользоваться сайтом без
				изменения настроек, вы даёте согласие на использование cookie-файлов.
			</p>
			<div className={styles.cookiePopupBtnWrap}>
				<button
					onClick={acceptBtnClick}
					className={styles.cookiePopupBtnAccept}
				>
					<p>Принять</p>
				</button>
				<button
					onClick={declineBtnClick}
					className={styles.cookiePopupBtnDecline}
				>
					<p>Закрыть</p>
				</button>
			</div>
		</div>
	)
}

export default CookiePopup
