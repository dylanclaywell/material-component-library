import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import IconButton from './IconButton'

describe('IconButton', () => {
  test('it renders the button', () => {
    render(<IconButton name="icon-name" onClick={jest.fn()} />)

    const button = screen.getByRole('button')

    expect(button).toBeDefined()
  })

  test('it calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<IconButton name="icon-name" onClick={onClick} />)

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(button).toBeDefined()
  })
})
