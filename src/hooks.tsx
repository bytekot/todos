import { useContext } from 'react'
import { TaskContext } from './context'

export const useTasks = () => useContext(TaskContext)
