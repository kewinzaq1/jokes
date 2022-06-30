import React, {StrictMode} from 'react'
import {
  render as rtlRender,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import {App} from './App'
import {QueryClient, QueryClientProvider} from 'react-query'
import {JokesProvider} from './context'
import userEvent from '@testing-library/user-event'

const queryClient = new QueryClient()

const render = (ui: JSX.Element) => {
  const Wrapper = ({children}: {children: JSX.Element}) => (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <JokesProvider>{children}</JokesProvider>
      </QueryClientProvider>
    </StrictMode>
  )

  return rtlRender(ui, {wrapper: Wrapper})
}

test('render app', () => {
  render(<App />)
  expect(
    screen.getByRole('heading', {level: 1, name: /jokes/i})
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: /choose category and display random joke/i
    })
  ).toBeInTheDocument()
})

test('fetch and display joke', async () => {
  render(<App />)

  await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

  await userEvent.click(screen.getByRole('button'))
  await userEvent.click(screen.getByText(/animal/i))

  await waitFor(async () => await screen.findByText(/show joke/i))

  expect(screen.getByTestId('joke-modal-title')).toBeInTheDocument()
})
