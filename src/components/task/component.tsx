export interface Task {
    name: string
}

export const Task = ({ name }: Task) => {
    return (
        <div>{name}</div>
    )
}
