import React from 'react'

export default function BookRow({ book, onDelete }) {
	return (
		<div className='book-row'>
			<div className='book-info'>
				<div className='book-title'>
					{book.title}
					<span className='badge-year'>{book.year || '—'}</span>
				</div>
				<div className='book-meta'>
					{book.author} — <span style={{ fontFamily: 'monospace' }}>{book.isbn}</span>
				</div>
				{book.genre && (
					<div className='book-meta' style={{ marginTop: 6 }}>
						Gatunek: {book.genre}
					</div>
				)}
			</div>
			<div style={{ display: 'flex', gap: 8 }}>
				<button onClick={() => onDelete(book.id)} className='btn btn-ghost'>
					Usuń
				</button>
			</div>
		</div>
	)
}
