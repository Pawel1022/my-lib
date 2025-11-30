import React from 'react'

export default function SearchPanel({ query, setQuery, sortBy, setSortBy }) {
	return (
		<>
			<input
				className='search-input'
				placeholder='Szukaj po tytule/autorze'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
				<div style={{ fontSize: 13, color: '#475569' }}>Sortuj:</div>
				<select className='select' value={sortBy} onChange={e => setSortBy(e.target.value)}>
					<option value='title'>Tytule</option>
					<option value='author'>Autorze</option>
					<option value='year'>Roku</option>
				</select>
			</div>
			<div className='hint'>Wyszukuje po tytule i autorze.</div>
		</>
	)
}
