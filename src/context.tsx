import { createContext, useState } from 'react'
import { Task } from './types'

interface TaskContextValue {
    tasks: Task[]
    addTask: (taskName: string) => void
    toggleCompleted: (id: number) => void
    removeCompleted: () => void
}

const taskContextDefaultValue: TaskContextValue = {
    tasks: [],
    addTask: () => {},
    toggleCompleted: () => {},
    removeCompleted: () => {},
}

export const TaskContext = createContext<TaskContextValue>(taskContextDefaultValue)

export function TaskProvider ({ children }: { children: React.ReactNode }) {
    const [ tasks, setTasks ] = useState<Task[]>([])

    const addTask = (taskName: string) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                name: taskName,
                completed: false,
            },
        ])
    }

    const toggleCompleted = (id: number) => {
        tasks[id].completed = !tasks[id].completed

        setTasks([...tasks])
    }

    const removeCompleted = () => {
        setTasks(tasks
            .filter(task => !task.completed)
            .map((task, index) => ({...task, id: index}))
        )
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleCompleted, removeCompleted }}>
            {children}
        </TaskContext.Provider>
    )
}
