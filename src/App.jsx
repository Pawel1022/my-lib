import React, { useState, useMemo, useEffect } from 'react'
import { fetchBooks, createBook, deleteBookById } from './api'
import Header from './components/Header'
import SearchPanel from './components/SearchPanel'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

export default function App() {
	const [books, setBooks] = useState([])
	const [q, setQ] = useState('')
	const [sortBy, setSortBy] = useState('title')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let mounted = true
		setLoading(true)
		fetchBooks()
			.then(data => {
				if (mounted) setBooks(data)
			})
			.catch(err => {
				console.error(err)
				setError('Nie można połączyć się z API — użyj lokalnych danych.')
			})
			.finally(() => {
				if (mounted) setLoading(false)
			})
		return () => {
			mounted = false
		}
	}, [])

	async function addBook(b) {
		try {
			const saved = await createBook(b)
			setBooks(prev => [...prev, saved])
		} catch (err) {
			console.error(err)
			alert('Błąd podczas zapisu książki na serwerze.')
		}
	}

	async function removeBook(id) {
		if (!confirm('Usunąć książkę?')) return
		try {
			await deleteBookById(id)
			setBooks(prev => prev.filter(x => x.id !== id))
		} catch (err) {
			console.error(err)
			alert('Błąd podczas usuwania książki.')
		}
	}

	const filtered = useMemo(() => {
		const qq = q.trim().toLowerCase()
		const res = books.filter(b => b.title.toLowerCase().includes(qq) || b.author.toLowerCase().includes(qq))
		res.sort((a, b) => {
			const A = (a[sortBy] || '').toString().toLowerCase()
			const B = (b[sortBy] || '').toString().toLowerCase()
			return A < B ? -1 : A > B ? 1 : 0
		})
		return res
	}, [books, q, sortBy])

	return (
		<div className='app'>
			<div className='container'>
				<Header count={books.length} />
				<div className='grid'>
					<div className='col'>
						<div className='card'>
							<SearchPanel query={q} setQuery={setQ} sortBy={sortBy} setSortBy={setSortBy} />
						</div>
						<BookForm onAdd={addBook} />
					</div>

					<main>
						<div className='card'>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
								<div style={{ fontWeight: 600 }}>Lista książek</div>
								<div style={{ color: '#64748b' }}>{filtered.length} znaleziono</div>
							</div>

							{loading ? (
								<div style={{ padding: 12 }}>Ładowanie...</div>
							) : error ? (
								<div style={{ padding: 12, color: 'crimson' }}>{error}</div>
							) : (
								<BookList books={filtered} onDelete={removeBook} />
							)}
						</div>
					</main>
				</div>

				<div className='footer'>Backend: JSON-Server db.json</div>
			</div>
		</div>
	)
}
