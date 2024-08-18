import styles from './styles.module.scss'

export interface Task {
    name: string
    completed: boolean
}

export interface TaskProps extends Task {
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Task = ({ name, completed, onClick }: TaskProps) => {
    return (
        <div
            className={styles.task}
            onClick={onClick}
        >
            {completed ? '+' : '-'} {name}
        </div>
    )
}
