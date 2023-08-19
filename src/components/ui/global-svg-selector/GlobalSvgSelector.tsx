import React from 'react'

interface Props {
	id: string
}

export const GlobalSvgSelector = ({ id }: Props) => {
	switch (id) {
		case 'burger':
			return (
				<svg
					width='30'
					height='25'
					viewBox='0 0 30 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Group 6'>
						<rect id='Rectangle 8' width='30' height='5' fill='#029491' />
						<rect
							id='Rectangle 9'
							y='10'
							width='30'
							height='5'
							fill='#029491'
						/>
						<rect
							id='Rectangle 10'
							y='20'
							width='30'
							height='5'
							fill='#029491'
						/>
					</g>
				</svg>
			)
		case 'close':
			return (
				<svg
					width='25'
					height='25'
					viewBox='0 0 25 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Group 6'>
						<rect
							id='Rectangle 9'
							x='3.53613'
							width='30'
							height='5'
							transform='rotate(45 3.53613 0)'
							fill='white'
						/>
						<rect
							id='Rectangle 10'
							x='24.7485'
							y='3.53564'
							width='30'
							height='5'
							transform='rotate(135 24.7485 3.53564)'
							fill='white'
						/>
					</g>
				</svg>
			)
		default:
			return null
	}
}
