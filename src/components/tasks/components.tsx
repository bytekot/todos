import { Task } from '../task/component'
import { Task as TaskInterface } from '../task/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Tasks {
    tasks: TaskInterface[]
    onClick: (id: number) => void
    showCompleted: boolean | null
    className?: string
}

export const Tasks = ({ className, tasks, onClick, showCompleted }: Tasks) => {
    return (
        <div className={classNames(styles.tasks, className)}>
            {
                tasks
                    .filter(task => showCompleted === null || task.completed === showCompleted)
                    .map(({ id, name, completed }) =>
                        <Task
                            key={id}
                            id={id}
                            name={name}
                            completed={completed}
                            onClick={onClick}
                        />
                    )
            }
        </div>
    )
}
