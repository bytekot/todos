import { useState } from 'react'
import { TaskProvider } from './context'
import { TextFieldContaner } from './components/text-field/container'
import { TasksContainer } from './components/tasks/container'
import { TaskFilterContainer } from './components/task-filter/container'
import styles from './styles.module.scss'

function App () {
    const [ activeFilter, setActiveFilter ] = useState<boolean|null>(null)

    return (
        <div className={styles.app}>
            <TaskProvider>
                <TextFieldContaner
                    emptyText='What needs to be done? (type and press Enter)'
                    autoFocus={true}
                />
                <TaskFilterContainer
                    className={styles.taskFilter}
                    onChange={setActiveFilter}
                    activeFilter={activeFilter}
                />
                <TasksContainer
                    className={styles.tasks}
                    completedShown={activeFilter}
                />
            </TaskProvider>
        </div>
    )
}

export default App
