import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './assets/styles/index.scss'
const NotFound = lazy(() => import('./pages/NotFound'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Category = lazy(() => import('./pages/Category'))
const Recipes = lazy(() => import('./pages/Recipes'))

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/category/:name' component={Category} />
					<Route path='/meal/:id' component={Recipes} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App

