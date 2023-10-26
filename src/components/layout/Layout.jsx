import cn from 'clsx'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Preloader from '../screens/Preloader'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<>
			<Header />
			<main className={cn(styles.main, 'container')}>
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout
