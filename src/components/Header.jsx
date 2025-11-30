import React from 'react'

export default function Header({ count }) {
	return (
		<header className='header'>
			<div>
				<div className='title'>Katalog książek</div>
				<div className='subtitle'>Prosty CRUD z walidacją ISBN</div>
			</div>
			<div className='count'>Ilość: {count}</div>
		</header>
	)
}
