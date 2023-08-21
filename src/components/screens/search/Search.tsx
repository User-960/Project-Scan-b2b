import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Search.module.scss'

const Search: FC = () => {
	const meta: IMeta = {
		title: 'Поиск по ИНН',
		description: 'Find company'
	}

	return (
		<Layout meta={meta}>
			<div>Search</div>
		</Layout>
	)
}

export default Search
