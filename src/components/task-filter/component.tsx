import { Button } from '../button/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface TaskFilterProps {
    onChange: (completed: boolean | null) => void
    onClearButtonClick: () => void
    activeFilter?: boolean | null
    className?: string
}

interface FilterValues {
    [key: string]: boolean | null
}

const FILTER_VALUES: FilterValues = {
    All: null,
    Active: false,
    Completed: true,
}

export const TaskFilter = ({
    activeFilter = null,
    onChange,
    onClearButtonClick,
    className,
}: TaskFilterProps) => {

    return (
        <div className={classNames(styles.taskFilter, className)}>
            {Object.keys(FILTER_VALUES).map((filterName, index) =>
                <Button
                    key={index}
                    className={classNames(styles.tab, {
                        [styles.activeTab]: activeFilter === FILTER_VALUES[filterName],
                    })}
                    onClick={() => onChange(FILTER_VALUES[filterName])}
                >
                    {filterName}
                </Button>
            )}
            <Button className={styles.clearBtn} onClick={onClearButtonClick}>Clear completed</Button>
        </div>
    )
}
