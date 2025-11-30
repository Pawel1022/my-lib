const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001'

export async function fetchBooks() {
	const res = await fetch(`${BASE}/books`)
	if (!res.ok) throw new Error('Failed to fetch books')
	return res.json()
}

export async function createBook(book) {
	const body = { ...book }
	if (body.id) delete body.id // let server assign id
	const res = await fetch(`${BASE}/books`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	})
	if (!res.ok) throw new Error('Failed to create book')
	return res.json()
}

export async function deleteBookById(id) {
	const res = await fetch(`${BASE}/books/${id}`, { method: 'DELETE' })
	if (!res.ok) throw new Error('Failed to delete book')
	return true
}
