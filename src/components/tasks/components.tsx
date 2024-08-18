import { Task } from '../task/component'
import { Task as TaskInterface } from '../task/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Tasks {
    className?: string
    tasks: TaskInterface[]
}

export const Tasks = ({ className, tasks }: Tasks) => {
    return (
        <div className={classNames(styles.tasks, className)}>
            {tasks.map(({ name }, index) =>
                <Task key={index} name={name} />
            )}
        </div>
    )
}
