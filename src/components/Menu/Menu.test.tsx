import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Menu from './Menu'

describe('Menu', () => {
  test('it is hidden when isOpen is false', () => {
    render(
      <Menu onClose={jest.fn()} isOpen={false}>
        <span>Menu item</span>
      </Menu>
    )

    const menuItem = screen.queryByText(/menu item/i)

    expect(menuItem).not.toBeVisible()
  })
})
