import { TextField } from './components/text-field/component'
import { TaskFilter } from './components/task-filter/component'
import { Tasks } from './components/tasks/components'
import { Task } from './components/task/component'
import { useState } from 'react'
import styles from './styles.module.scss'

function App () {
    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ activeFilter, setActiveFilter ] = useState<boolean|null>(null)
    const [ taskName, setTaskName ] = useState<string>('')

    function addTask (event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            const task: Task = { id: tasks.length, name: taskName, completed: false }

            tasks.push(task)

            setTasks(tasks)
            setTaskName('')
        }
    }

    function toggleCompleted (id: number) {
        tasks[id].completed = !tasks[id].completed

        setTasks([...tasks])
    }

    function removeCompleted () {
        setTasks(tasks
            .filter(task => !task.completed)
            .map((task, index) => ({...task, id: index}))
        )
    }

    return (
        <div className={styles.app}>
            <TextField
                value={taskName}
                onKeyDown={addTask}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskName(event.target.value)}
                emptyText='What needs to be done? (type and press Enter)'
                autoFocus={true}
            />
            {tasks.length > 0 
                && <TaskFilter
                    className={styles.taskFilter}
                    onChange={setActiveFilter}
                    onClearButtonClick={removeCompleted}
                    activeFilter={activeFilter}
                />
            }
            {tasks.length > 0
                ? <Tasks
                    className={styles.tasks}
                    tasks={tasks}
                    onClick={toggleCompleted}
                    showCompleted={activeFilter}
                />
                : <div className={styles.emptyText}>To-do list is empty.</div>
            }
        </div>
    )
}

export default App
