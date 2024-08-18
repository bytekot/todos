import { TextField } from './components/text-field/component'
import { Tasks } from './components/tasks/components'
import { Task } from './components/task/component'
import { useState } from 'react'
import styles from './styles.module.scss'

function App () {
    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ taskName, setTaskName ] = useState<string>('')

    function addTask (event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            const task: Task = { name: taskName, completed: false }

            tasks.unshift(task)

            setTasks(tasks)
            setTaskName('')
        }
    }

    return (
        <>
            <TextField
                value={taskName}
                onKeyDown={addTask}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskName(event.target.value)}
                emptyText='What needs to be done?'
                autoFocus={true}
            />
            <Tasks
                className={styles.tasks}
                tasks={tasks}>
            </Tasks>
        </>
    )
}

export default App
