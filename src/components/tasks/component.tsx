import { Task as TaskInterface } from '../../types'
import { Task } from '../task/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

export interface TasksProps {
    tasks: TaskInterface[]
    onClick: (id: number) => void
    completedShown: boolean | null
    className?: string
}

export const Tasks = ({ className, tasks, onClick, completedShown }: TasksProps) => {
    let displayedTasks = tasks

    if (completedShown !== null) {
        displayedTasks = tasks.filter(task => task.completed === completedShown)
    }

    return (
        <div className={classNames(styles.tasks, className)}>
            {displayedTasks.length > 0
                ? tasks
                    .map(({ id, description, completed }) =>
                        <Task
                            key={id}
                            id={id}
                            description={description}
                            completed={completed}
                            onClick={onClick}
                        />
                    )
                : <div className={styles.emptyText}>To-do list is empty.</div>
            }
        </div>
    )
}
