import React from 'react'
import BookRow from './BookRow'

export default function BookList({ books, onDelete }) {
	if (!books || books.length === 0) {
		return <div style={{ padding: 12, color: '#64748b' }}>Brak książek.</div>
	}

	return (
		<div className='book-list'>
			{books.map((b, idx) => (
				<React.Fragment key={b.id}>
					<BookRow book={b} onDelete={onDelete} />
					{idx < books.length - 1 && <div className='divider' />}
				</React.Fragment>
			))}
		</div>
	)
}
