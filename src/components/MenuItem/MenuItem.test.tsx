import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MenuItem from './MenuItem'

describe('MenuItem', () => {
  test('it calls onClick with the default values when clicked', () => {
    const onClick = jest.fn()

    render(<MenuItem onClick={onClick}>Item</MenuItem>)

    const menuItem = screen.getByRole('button')

    userEvent.click(menuItem)

    expect(menuItem).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(expect.any(Object), '')
  })

  test('it calls onClick with the given value when clicked', () => {
    const onClick = jest.fn()

    render(
      <MenuItem value="someValue" onClick={onClick}>
        Item
      </MenuItem>
    )

    const menuItem = screen.getByRole('button')

    userEvent.click(menuItem)

    expect(menuItem).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(expect.any(Object), 'someValue')
  })

  test('it renders as text if onClick is not passed', () => {
    render(<MenuItem>Item</MenuItem>)

    const button = screen.queryByRole('button')
    const item = screen.getByText(/item/i)

    expect(button).not.toBeInTheDocument()
    expect(item).toBeInTheDocument()
  })
})
