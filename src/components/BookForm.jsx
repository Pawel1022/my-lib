import React, { useState } from 'react'
import validateISBN from '../utils/isbn'

export default function BookForm({ onAdd }) {
	const [form, setForm] = useState({ title: '', author: '', isbn: '', year: '', genre: '' })
	const [err, setErr] = useState('')

	function update(k, v) {
		setForm(prev => ({ ...prev, [k]: v }))
	}

	function submit(e) {
		e.preventDefault()
		setErr('')
		if (!form.title.trim() || !form.author.trim() || !form.isbn.trim()) {
			setErr('Tytuł, autor i ISBN są wymagane')
			return
		}
		if (!validateISBN(form.isbn)) {
			setErr('Niepoprawny numer ISBN (obsługiwane: ISBN-10 lub ISBN-13)')
			return
		}
		const book = { ...form }
		onAdd(book)
		setForm({ title: '', author: '', isbn: '', year: '', genre: '' })
	}

	return (
		<form onSubmit={submit} className='card' style={{ marginTop: 12 }}>
			<h3 style={{ fontWeight: 600, marginBottom: 8 }}>Dodaj książkę</h3>
			<div className='form-grid'>
				<input
					className='input'
					placeholder='Tytuł'
					value={form.title}
					onChange={e => update('title', e.target.value)}
				/>
				<input
					className='input'
					placeholder='Autor'
					value={form.author}
					onChange={e => update('author', e.target.value)}
				/>
				<input className='input' placeholder='ISBN' value={form.isbn} onChange={e => update('isbn', e.target.value)} />
				<input className='input' placeholder='Rok' value={form.year} onChange={e => update('year', e.target.value)} />
				<input
					className='input full'
					placeholder='Gatunek'
					value={form.genre}
					onChange={e => update('genre', e.target.value)}
				/>
			</div>
			{err && <div className='form-error'>{err}</div>}
			<div style={{ marginTop: 12, textAlign: 'right' }}>
				<button type='submit' className='btn btn-primary'>
					Dodaj
				</button>
			</div>
		</form>
	)
}
