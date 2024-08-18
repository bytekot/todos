import styles from './styles.module.scss'

export interface Task {
    name: string
}

export const Task = ({ name }: Task) => {
    return (
        <div className={styles.task}>{name}</div>
    )
}
