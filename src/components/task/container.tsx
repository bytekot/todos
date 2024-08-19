import { useState } from 'react'
import { Task } from './component'
import { TaskProps } from './component'

export const TaskContainer = (props: TaskProps) => {
    const [ completed, setCompleted ] = useState(props.completed)

    const onClick = () => {
        setCompleted(!completed)
    }

    return (
        <Task
            {...props}
            completed={completed}
            onClick={onClick}
        />
    )
}
