import { render, screen } from '@testing-library/react'
import { Button } from './button'
import * as React from 'react'

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('inline-flex')
    expect(buttonElement).toHaveClass('bg-primary')
    expect(buttonElement).toHaveClass('text-primary-foreground')
  })

  it('renders with destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>)
    const buttonElement = screen.getByRole('button', { name: /delete/i })
    expect(buttonElement).toHaveClass('bg-destructive')
    expect(buttonElement).toHaveClass('text-white')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const buttonElement = screen.getByRole('button', { name: /secondary/i })
    expect(buttonElement).toHaveClass('bg-secondary')
    expect(buttonElement).toHaveClass('text-secondary-foreground')
  })

  it('renders with custom className', () => {
    render(<Button className="mt-4">Custom</Button>)
    const buttonElement = screen.getByRole('button', { name: /custom/i })
    expect(buttonElement).toHaveClass('mt-4')
  })

  it('renders as link variant', () => {
    render(<Button variant="link">Link</Button>)
    const buttonElement = screen.getByRole('button', { name: /link/i })
    expect(buttonElement).toHaveClass('text-primary')
    expect(buttonElement).toHaveClass('underline-offset-4')
  })
})