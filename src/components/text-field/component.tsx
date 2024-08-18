import styles from './styles.module.scss'

interface TextField {
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
    emptyText?: string
    autoFocus?: boolean
}

export const TextField = ({
    value,
    onChange,
    onKeyDown,
    emptyText,
    autoFocus,
}: TextField) => (

    <input
        type='text'
        className={styles.textField}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={emptyText}
        autoFocus={autoFocus}
    />
)
