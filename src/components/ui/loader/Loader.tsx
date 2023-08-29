import Image from 'next/image'
import { FC } from 'react'

interface ILoaderProps {
	loader: string
}

const Loader: FC<ILoaderProps> = ({ loader }) => {
	return (
		<Image
			src={loader === 'dots' ? '/images/three-dots.svg' : '/images/spinner.svg'}
			alt='loader'
			width={120}
			height={30}
			priority={true}
			draggable={false}
		/>
	)
}

export default Loader
