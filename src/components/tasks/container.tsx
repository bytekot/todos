import { useTasks } from '../../hooks'
import { Tasks } from './component'
import styles from './styles.module.scss'

interface TasksContainerProps {
    completedShown: boolean | null
    className?: string
}

export const TasksContainer = (props: TasksContainerProps) => {
    const { tasks, toggleCompleted } = useTasks()

    return (
        tasks.length > 0
            ? <Tasks tasks={tasks} onClick={toggleCompleted} {...props} />
            : <div className={styles.emptyText}>To-do list is empty.</div>
    )
}
