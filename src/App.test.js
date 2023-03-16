/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import App from './App'

test('render App component', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }))
    })
    render(<App />)
    expect(<App />).toBeTruthy()
})
