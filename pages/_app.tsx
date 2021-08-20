/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { I18nProvider } from 'next-localization'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const { lngDict, ...rest } = pageProps

	return (
		<I18nProvider lngDict={lngDict} locale={router.locale}>
			<Component {...rest} />
		</I18nProvider>
	)
}

export default MyApp
