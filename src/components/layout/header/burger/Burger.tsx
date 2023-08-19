import { FC, useState } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Burger.module.scss'

const Burger: FC = () => {
	const [isShow, setIsShow] = useState<boolean>(false)
	return (
		<div className={styles.burgerMenu}>
			<button onClick={() => setIsShow(prev => !prev)} aria-label='Open menu'>
				{isShow ? (
					<GlobalSvgSelector id='close' />
				) : (
					<GlobalSvgSelector id='burger' />
				)}
			</button>
		</div>
	)
}

export default Burger
