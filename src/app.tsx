import { TextField } from './components/text-field/component'
import { TaskFilter } from './components/task-filter/component'
import { Tasks } from './components/tasks/components'
import { Task } from './components/task/component'
import { useState } from 'react'
import styles from './styles.module.scss'

function App () {
    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ filteredTasks, setFilteredTasks ] = useState<Task[]>(tasks)
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

    function setFilter (completed: boolean | null) {
        setActiveFilter(completed)

        if (completed === null) {
            setFilteredTasks(tasks)

            return
        }

        const filteredTasks: Task[] = tasks.filter(task => task.completed === completed)

        setFilteredTasks(filteredTasks)
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
                && <TaskFilter onChange={setFilter} activeFilter={activeFilter} />
            }
            {filteredTasks.length > 0
                ? <Tasks
                    className={styles.tasks}
                    tasks={filteredTasks}
                    onClick={toggleCompleted}
                />
                : <div className={styles.emptyText}>To-do list is empty.</div>
            }
        </div>
    )
}

export default App
