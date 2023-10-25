import Meal from './Meal'

const MealList = ({ meals }) => {
	return (
		<>
			{meals.map(meal => (
				<Meal key={meal.idMeal} {...meal} />
			))}
		</>
	)
}

export default MealList
