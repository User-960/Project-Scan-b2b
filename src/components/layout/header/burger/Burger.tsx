import { FC, useState } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import { useOnClickOutside } from '@/components/hooks/useOnClickOutside'

import styles from './Burger.module.scss'
import Menu from './Menu'

const Burger: FC = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

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

			<menu>
				<Menu isShow={isShow} />
			</menu>
		</div>
	)
}

export default Burger
