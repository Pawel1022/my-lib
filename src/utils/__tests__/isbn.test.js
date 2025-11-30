import validateISBN, { isValidISBN10, isValidISBN13, cleanISBN } from '../isbn'

describe('ISBN validation', () => {
	test('cleanISBN removes dashes and spaces', () => {
		expect(cleanISBN('978-83-10 12345-6')).toBe('9788310123456')
	})

	test('valid ISBN-10 passes', () => {
		// canonical valid ISBN-10
		expect(isValidISBN10('0306406152')).toBe(true)
	})

	test('invalid ISBN-10 fails', () => {
		expect(isValidISBN10('0306406153')).toBe(false)
	})

	test('valid ISBN-13 passes', () => {
		// canonical valid ISBN-13
		expect(isValidISBN13('9780143058144')).toBe(true)
	})

	test('invalid ISBN-13 fails', () => {
		expect(isValidISBN13('9780143058140')).toBe(false)
	})

	test('validateISBN dispatches correctly', () => {
		expect(validateISBN('0306406152')).toBe(true)
		expect(validateISBN('9780143058144')).toBe(true)
		expect(validateISBN('999')).toBe(false)
	})
})
