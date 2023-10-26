import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getMealById } from '../api'
import Preloader from '../components/screens/Preloader'
import ButtonGoBack from '../components/ui/buttons/ButtonGoBack'
import styles from './Recipe.module.scss'

const Recipe = () => {
	const [recipe, setRecipe] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getMealById(id)
			.then(data => setRecipe(data.meals[0]))
			.catch(error => {
				console.error(error)
			})
	}, [id])

	return (
		<>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className={styles.cardRecipeWrap}>
					<img
						className={styles.cardRecipeImage}
						src={recipe.strMealThumb}
						alt={`Product image: ${recipe.strMealThumb}`}
					/>
					<h2 className={styles.cardRecipeTitle}>{recipe.strMeal}</h2>
					<p className={styles.cardRecipeTextCategory}>
						{`Category: ${recipe.strCategory}`}
					</p>
					<p className={styles.cardRecipeTextArea}>
						{`Area: ${recipe.strArea}`}
					</p>
					<p className={styles.cardRecipeText}>{recipe.strInstructions}</p>
					<div className={styles.cardRecipeTableWrap}>
						<div className={styles.cardRecipeColumnTextWrap}>
							<p className={styles.cardRecipeTableColumn}>Ingredient:</p>
							<p className={styles.cardRecipeTableColumn}>Measure:</p>
						</div>
						{Object.keys(recipe).map(key => {
							if (key.includes('Ingredient') && recipe[key]) {
								return (
									<div className={styles.cardRecipeIngredientsWrap} key={key}>
										<div className={styles.cardRecipeIngredients}>
											<p className={styles.cardRecipeIngredientsTextColumn}>
												{recipe[key]}
											</p>
										</div>
										<div className={styles.cardRecipeIngredients}>
											<p className={styles.cardRecipeIngredientsTextColumn}>
												{recipe[`strMeasure${key.slice(13)}`]}
											</p>
										</div>
									</div>
								)
							}
							return null
						})}
					</div>
					<Link
						to={'video'}
						state={{
							strYoutube: recipe.strYoutube
						}}
						className={styles.watchVideoRecipeButton}
					>
						Watch video recipe
					</Link>
					<Outlet />
					<div className={styles.btnGoBackWrap}>
						<ButtonGoBack />
					</div>
				</div>
			)}
		</>
	)
}

export default Recipe
