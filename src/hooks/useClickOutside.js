import { useEffect } from 'react'

//Отслеживание клика вне области корзины
const useClickOutside = (ref, callback) => {
	const handleClick = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			callback()
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	})
}

export default useClickOutside
