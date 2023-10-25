import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './assets/styles/index.scss'
const NotFound = lazy(() => import('./pages/NotFound'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Category = lazy(() => import('./pages/Category'))
const Description = lazy(() => import('./pages/Description'))
const Recipe = lazy(() => import('./pages/Recipe'))
const VideoRecipe = lazy(() => import('./pages/VideoRecipe'))

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='category/:name' element={<Category />} />
					<Route path='category/:name/:description' element={<Description />} />
					<Route path='meal/:recipe/:id' element={<Recipe />}>
						<Route path='video' element={<VideoRecipe />} />
					</Route>
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App

