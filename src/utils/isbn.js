function cleanISBN(isbn) {
	return String(isbn || '').replace(/[^0-9Xx]/g, '')
}

function isValidISBN10(isbn) {
	const s = cleanISBN(isbn).toUpperCase()
	if (s.length !== 10 || !/^[0-9]{9}[0-9X]$/.test(s)) return false
	const digits = s.split('')
	let sum = 0
	for (let i = 0; i < 9; i++) {
		const d = Number(digits[i])
		if (Number.isNaN(d)) return false
		sum += (i + 1) * d
	}
	const checkChar = digits[9]
	const check = checkChar === 'X' ? 10 : Number(checkChar)
	if (Number.isNaN(check)) return false
	sum += 10 * check
	return sum % 11 === 0
}

function isValidISBN13(isbn) {
	const s = cleanISBN(isbn)
	if (s.length !== 13 || !/^[0-9]{13}$/.test(s)) return false
	const digits = s.split('').map(d => Number(d))
	let sum = 0
	for (let i = 0; i < 12; i++) {
		sum += digits[i] * (i % 2 === 0 ? 1 : 3)
	}
	const check = (10 - (sum % 10)) % 10
	return check === digits[12]
}

export { cleanISBN, isValidISBN10, isValidISBN13 }
export default function validateISBN(isbn) {
	const s = cleanISBN(isbn)
	if (s.length === 10) return isValidISBN10(s)
	if (s.length === 13) return isValidISBN13(s)
	return false
}
