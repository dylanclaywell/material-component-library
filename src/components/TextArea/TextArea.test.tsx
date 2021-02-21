import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextArea from './TextArea'

describe('TextArea', () => {
  test('it calls onChange when the user types in the textarea', () => {
    let value = ''
    const onChange = jest.fn().mockImplementation((event) => {
      value += event.target.value
    })
    render(<TextArea value={value} onChange={onChange} />)

    const input = screen.getByRole('textbox')

    userEvent.type(input, 'test')

    expect(input).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledTimes(4)
    expect(value).toBe('test')
  })
})
