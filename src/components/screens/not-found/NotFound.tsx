import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

// import { useAuth } from '@/components/hooks/useAuth'
import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const NotFound: FC = () => {
	const meta: IMeta = {
		title: 'Not Found',
		description: 'Page is not found'
	}

	// const { isAuth } = useAuth()
	// const { push } = useRouter()

	// useEffect(() => {
	// 	if (!isAuth) {
	// 		push('/auth')
	// 	}
	// }, [])

	return (
		<>
			<Layout meta={meta}>
				<div style={{ textAlign: 'center', marginTop: '100px' }}>
					404 | Page is not found
				</div>
			</Layout>
		</>
	)
}

export default NotFound
