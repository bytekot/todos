import styles from './styles.module.scss'
import classNames from 'classnames'

interface Button {
    disabled?: boolean
    className?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children?: React.ReactNode
}

export const Button = ({
    disabled = false,
    className,
    onClick,
    children,
}: Button) => (

    <button
        className={classNames(styles.button, className)}
        disabled={disabled}
        onClick={onClick}
    >
        <span>{children}</span>
    </button>
)
