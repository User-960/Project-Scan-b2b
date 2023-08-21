import { FC } from 'react'

import styles from '../Header.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<div className={styles.used}>
				Использовано компаний <span>34</span>
			</div>
			<div className={styles.limit}>
				Лимит по компаниям <span>100</span>
			</div>
		</div>
	)
}

export default Statistics
