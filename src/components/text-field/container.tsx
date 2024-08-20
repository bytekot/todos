import { useState } from 'react'
import { useTasks } from '../../hooks'
import { TextField } from './component'

interface TextFieldContanerProps {
    emptyText?: string
    autoFocus?: boolean
}

export const TextFieldContaner = (props: TextFieldContanerProps) => {
    const { addTask } = useTasks()
    const [ description, setDescription ] = useState<string>('')

    function onKeyDown (event: React.KeyboardEvent) {
        if (description && event.key === 'Enter') {
            event.preventDefault()

            addTask(description)
            setDescription('')
        }
    }

    return (
        <TextField
            value={description}
            onKeyDown={onKeyDown}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
            {...props}
        />
    )
}
