import { useTasks } from '../../hooks'
import { TaskFilter } from './component'

interface TaskFilterContainerProps {
    onChange: (completed: boolean | null) => void
    activeFilter?: boolean | null
    className?: string
}

export const TaskFilterContainer = (props: TaskFilterContainerProps) => {
    const { removeCompleted } = useTasks()

    return <TaskFilter onClearButtonClick={removeCompleted} {...props} />
}
