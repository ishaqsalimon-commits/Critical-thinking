import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Critical Thinking dashboard', () => {
  it('displays the main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /curiosity is the beginning of understanding/i,
      }),
    ).toBeInTheDocument()
  })

  it('displays the learning skills', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /analytical thinking/i }),
    ).toBeInTheDocument()
  })
})