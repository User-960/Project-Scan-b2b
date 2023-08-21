import { FC } from 'react'

import Loader from '@/components/ui/loader/Loader'

import styles from '../Header.module.scss'

import { useAccount } from './useAccount'

const Statistics: FC = () => {
	const { data, isLoading } = useAccount()

	return (
		<div className={styles.statistics}>
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					<div className={styles.used}>
						Использовано компаний <span>{data?.usedCompanyCount}</span>
					</div>
					<div className={styles.limit}>
						Лимит по компаниям <span>{data?.companyLimit}</span>
					</div>
				</>
			)}
		</div>
	)
}

export default Statistics
