import { useTasks } from '../../hooks'
import { TaskFilter } from './component'

interface TaskFilterContainerProps {
    onChange: (completed: boolean | null) => void
    activeFilter?: boolean | null
    className?: string
}

export const TaskFilterContainer = (props: TaskFilterContainerProps) => {
    const { tasks, removeCompleted } = useTasks()

    return (
        tasks.length > 0 && <TaskFilter onClearButtonClick={removeCompleted} {...props} />
    )
}
