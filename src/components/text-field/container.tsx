import { useState } from 'react'
import { useTasks } from '../../hooks'
import { TextField } from './component'

interface TextFieldContanerProps {
    emptyText?: string
    autoFocus?: boolean
}

export const TextFieldContaner = (props: TextFieldContanerProps) => {
    const { addTask } = useTasks()
    const [ taskName, setTaskName ] = useState<string>('')

    function onKeyDown (event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            addTask(taskName)
            setTaskName('')
        }
    }

    return (
        <TextField
            value={taskName}
            onKeyDown={onKeyDown}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskName(event.target.value)}
            {...props}
        />
    )
}
