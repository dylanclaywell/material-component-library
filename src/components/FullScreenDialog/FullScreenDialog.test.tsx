import React from 'react'
import { render, screen } from '@testing-library/react'

import FullScreenDialog from './FullScreenDialog'

describe('FullScreenDialog', () => {
  test('it renders the children', () => {
    render(
      <FullScreenDialog isOpen={false}>
        <span>Content</span>
      </FullScreenDialog>
    )

    const content = screen.getByText(/content/i)

    expect(content).toBeDefined()
  })

  test('it is hidden when isOpen is false', () => {
    render(
      <FullScreenDialog isOpen={false}>
        <span>Content</span>
      </FullScreenDialog>
    )

    const dialog = screen.getByRole('presentation', { hidden: true })
    const hidden = screen.queryByRole('presentation')

    expect(hidden).toBeNull()
    expect(dialog).toBeDefined()
  })

  test('it is visible when isOpen is true', () => {
    render(
      <FullScreenDialog isOpen={true}>
        <span>Content</span>
      </FullScreenDialog>
    )

    const dialog = screen.getByRole('presentation')

    expect(dialog).toBeDefined()
  })
})
