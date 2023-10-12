import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Suspense } from 'react'
import Preloader from '../screens/Preloader'
import cn from 'clsx'
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
