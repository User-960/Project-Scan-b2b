import { FC, useState } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Burger.module.scss'
import Menu from './Menu'

const Burger: FC = () => {
	const [isShow, setIsShow] = useState<boolean>(false)

	return (
		<div className={styles.burgerMenu}>
			<button
				className={styles.burgerBtn}
				onClick={() => setIsShow(prev => !prev)}
				aria-label='Open menu'
			>
				{isShow ? (
					<GlobalSvgSelector id='close' />
				) : (
					<GlobalSvgSelector id='burger' />
				)}
			</button>

			<Menu isShow={isShow} />
		</div>
	)
}

export default Burger
