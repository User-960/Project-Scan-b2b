import { FC } from 'react'

import { useObject } from '@/components/hooks/useObject'

interface IResultCarouselProps {
	data?: any
}

const ResultCarousel: FC<IResultCarouselProps> = ({ data }) => {
	const { histogramsData } = useObject()

	return (
		<ul>
			{histogramsData?.data.map((item: any) => <li>{item.histogramType}</li>)}
		</ul>
	)
}

export default ResultCarousel
