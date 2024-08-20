import { useTasks } from '../../hooks'
import { Tasks } from './component'

interface TasksContainerProps {
    completedShown: boolean | null
    className?: string
}

export const TasksContainer = (props: TasksContainerProps) => {
    const { tasks, toggleCompleted } = useTasks()

    return <Tasks tasks={tasks} onClick={toggleCompleted} {...props} />
}
