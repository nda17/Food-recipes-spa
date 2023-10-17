import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to)
	return (
		<Link
			to={to}
			style={{
				color: match ? '#ffd700' : '#ffffff'
			}}
			{...props}
		>
			{children}
		</Link>
	)
}

export default CustomLink
