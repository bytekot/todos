import { Task as TaskInterface } from '../../types'
import styles from './styles.module.scss'
import classNames from 'classnames'

export interface TaskProps extends TaskInterface {
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
