import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

const mockedTasks = [
  { id: 0, description: 'Task 1', completed: false },
  { id: 1, description: 'Task 2', completed: true },
  { id: 2, description: 'Task 3', completed: true },
]

function createTask (description: string) {
  const textField = screen.getByRole<HTMLInputElement>('textbox')

  fireEvent.change(textField, {target: { value: description } })

  fireEvent.keyDown(textField, { key: 'Enter', code: 'Enter' })
}

const getTaskNodes = () => screen.getAllByRole<HTMLLIElement>('listitem')


test('A new task is successfully created.', () => {
  render(<App tasks={mockedTasks} />)

  createTask('New task')

  expect(getTaskNodes().length).toBe(4)
})

test('An empty task is not created.', () => {
  render(<App tasks={mockedTasks} />)

  createTask('')

  expect(getTaskNodes().length).toBe(3)
})

test('Completed tasks are successfully deleted on clear button.', () => {
  render(<App tasks={mockedTasks} />)

  const clearButton = screen.getByText('Clear completed')

  fireEvent.click(clearButton)

  expect(getTaskNodes().length).toBe(1)
})

test('Only active tasks are displayed on the Active tab.', () => {
  render(<App tasks={mockedTasks} />)

  const tabActive = screen.getByText('Active')

  fireEvent.click(tabActive)

  expect(getTaskNodes().length).toBe(1)
})

test('Only completed tasks are displayed on the Completed tab.', () => {
  render(<App tasks={mockedTasks} />)

  const tabCompleted = screen.getByText('Completed')

  fireEvent.click(tabCompleted)

  expect(getTaskNodes().length).toBe(2)
})
