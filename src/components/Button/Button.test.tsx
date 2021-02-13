import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button', () => {
  test('it calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
