import styles from './styles.module.scss'
import classNames from 'classnames'

export interface Task {
    id: number
    name: string
    completed: boolean
}

export interface TaskProps extends Task {
    onClick: (id: number) => void
}

export const Task = ({ id, name, completed, onClick }: TaskProps) => {
    return (
        <div
            className={classNames(styles.task, {
                [styles.completed]: completed,
            })}
            onClick={() => onClick(id)}
        >
            {name}
        </div>
    )
}
