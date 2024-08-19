import { Task } from '../task/component'
import { Task as TaskInterface } from '../task/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Tasks {
    tasks: TaskInterface[]
    onClick: (id: number) => void
    className?: string
}

export const Tasks = ({ className, tasks, onClick }: Tasks) => {
    return (
        <div className={classNames(styles.tasks, className)}>
            {tasks.map(({ id, name, completed }) =>
                <Task
                    key={id}
                    id={id}
                    name={name}
                    completed={completed}
                    onClick={onClick}
                />
            )}
        </div>
    )
}
