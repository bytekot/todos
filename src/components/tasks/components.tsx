import { Task } from '../task/component'
import { Task as TaskInterface } from '../task/component'
import styles from './styles.module.scss'

interface Tasks {
    tasks: TaskInterface[]
}

export const Tasks = ({ tasks }: Tasks) => {
    return (
        <div className={styles.tasks}>
            {tasks.map(({ name }, index) =>
                <Task key={index} name={name} />
            )}
        </div>
    )
}
