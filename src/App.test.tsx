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


test('A new task is successfully created.', () => {
  render(<App tasks={mockedTasks} />)

  createTask('New task')

  const tasks = screen.getAllByRole<HTMLLIElement>('listitem')

  expect(tasks.length).toBe(4)
})

test('An empty task is not created.', () => {
  render(<App tasks={mockedTasks} />)

  createTask('')

  const tasks = screen.getAllByRole<HTMLLIElement>('listitem')

  expect(tasks.length).toBe(3)
})

test('Completed tasks are successfully deleted on clear button.', () => {
  render(<App tasks={mockedTasks} />)

  const clearButton = screen.getByText('Clear completed')

  fireEvent.click(clearButton)

  const tasks = screen.getAllByRole<HTMLLIElement>('listitem')

  expect(tasks.length).toBe(1)
})

test('Filters', () => {
  render(<App tasks={mockedTasks} />)

  const tabActive = screen.getByText('Active')

  fireEvent.click(tabActive)

  const tasks = screen.getAllByRole<HTMLLIElement>('listitem')

  expect(tasks.length).toBe(1)
})

test('Filter Completed', () => {
  render(<App tasks={mockedTasks} />)

  const tabCompleted = screen.getByText('Completed')

  fireEvent.click(tabCompleted)

  const tasks = screen.getAllByRole<HTMLLIElement>('listitem')

  expect(tasks.length).toBe(2)
})


test('Change completed', () => {
  render(<App tasks={mockedTasks} />)

  const activeTask = screen.getAllByRole<HTMLLIElement>('listitem')

  fireEvent.click(activeTask[0])

  // console.log(activeTask[0].className)
})
