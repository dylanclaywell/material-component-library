import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from './TextField'
import MenuItem from '../MenuItem'

// TODO finish these tests

describe('TextField', () => {
  test('it calls onChange when the user types in the text field', () => {
    let value = ''
    const onChange = jest.fn((event) => {
      value += event.target.value
    })
    render(<TextField value="" onChange={onChange} />)

    const input = screen.getByRole('textbox')

    userEvent.type(input, 'test')

    expect(input).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledTimes(4)
    expect(value).toBe('test')
  })

  test('it works as a select input', () => {
    let value = ''
    const onChange = jest.fn((event) => {
      value = event.target.value
    })
    render(
      <TextField value="" onChange={onChange} variant="select">
        <MenuItem value="someValue"></MenuItem>
      </TextField>
    )
  })
})
