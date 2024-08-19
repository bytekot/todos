import { Button } from '../button/component'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface TaskFilterProps {
    onChange: (completed: boolean | null) => void
    activeFilter?: boolean | null
}

const FILTER_VALUES = {
    All: null,
    Active: false,
    Completed: true,
}

export const TaskFilter = ({ onChange, activeFilter = null }: TaskFilterProps) => {
    return (
        <div>
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
        </div>
    )
}
