import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import '@/assets/styles/index.scss'
import { TypeComponentAuthFields } from '@/interfaces/page.interface'

type TypeApp = AppProps & TypeComponentAuthFields

const DynamicAuthProvider = dynamic(
	() => import('../components/providers/AuthProvider'),
	{
		ssr: false
	}
)

export default function App({ Component, pageProps }: TypeApp) {
	return (
		<DynamicAuthProvider Component={Component}>
			<Component {...pageProps} />
		</DynamicAuthProvider>
	)
}
