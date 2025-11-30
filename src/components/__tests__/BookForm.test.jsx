import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookForm from '../BookForm'

describe('BookForm', () => {
	test('shows error for missing required fields', async () => {
		const mockAdd = jest.fn()
		render(<BookForm onAdd={mockAdd} />)

		const addBtn = screen.getByRole('button', { name: /dodaj/i })
		await userEvent.click(addBtn)

		expect(screen.getByText(/Tytuł, autor i ISBN są wymagane/i)).toBeInTheDocument()
		expect(mockAdd).not.toHaveBeenCalled()
	})

	test('shows error for invalid ISBN and does not call onAdd', async () => {
		const mockAdd = jest.fn()
		render(<BookForm onAdd={mockAdd} />)

		await userEvent.type(screen.getByPlaceholderText(/Tytuł/i), 'Test Book')
		await userEvent.type(screen.getByPlaceholderText(/Autor/i), 'Test Author')
		await userEvent.type(screen.getByPlaceholderText(/ISBN/i), '123')

		await userEvent.click(screen.getByRole('button', { name: /dodaj/i }))

		expect(screen.getByText(/Niepoprawny numer ISBN/i)).toBeInTheDocument()
		expect(mockAdd).not.toHaveBeenCalled()
	})

	test('calls onAdd when form valid', async () => {
		const mockAdd = jest.fn()
		render(<BookForm onAdd={mockAdd} />)

		await userEvent.type(screen.getByPlaceholderText(/Tytuł/i), 'Lalka')
		await userEvent.type(screen.getByPlaceholderText(/Autor/i), 'Prus')
		await userEvent.type(screen.getByPlaceholderText(/ISBN/i), '8301012345')

		await userEvent.click(screen.getByRole('button', { name: /dodaj/i }))

		expect(mockAdd).toHaveBeenCalledTimes(1)
	})
})
