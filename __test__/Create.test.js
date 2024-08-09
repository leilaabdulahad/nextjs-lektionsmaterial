import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Create from '../app/admin/create/page'

test('renders Create component and checks form fields', () => {
  render(<Create />)
  
  //checks if the title input is present
  expect(screen.getByLabelText(/Titel:/)).toBeInTheDocument()

  expect(screen.getByLabelText(/Beskrivning:/)).toBeInTheDocument()

  expect(screen.getByLabelText(/Ämne:/)).toBeInTheDocument()

  expect(screen.getByLabelText(/Årskurs:/)).toBeInTheDocument()

  expect(screen.getByRole('button', { name: /Lägg till lektion/i })).toBeInTheDocument()
})

test('handles form submission with empty fields', () => {
  render(<Create />);
  
  fireEvent.click(screen.getByRole('button', { name: /Lägg till lektion/i }))

  expect(screen.getByText(/Alla fält är obligatoriska/)).toBeInTheDocument()
})