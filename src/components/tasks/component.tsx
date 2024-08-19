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
    return (
        <div className={classNames(styles.tasks, className)}>
            {
                tasks
                    .filter(task => completedShown === null || task.completed === completedShown)
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
