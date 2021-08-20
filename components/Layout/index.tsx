/* eslint-disable react-hooks/exhaustive-deps */
import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useI18n } from 'next-localization'

export default function Layout({ children }) {
	const router = useRouter()
	const i18n = useI18n()

	useEffect(() => {
		async function changeLocale() {
			if (router.locale === 'en') {
				i18n.set('en', await import('../../locales/en.json'))
				i18n.locale('en')
			} else if (router.locale === 'zh') {
				i18n.set('zh', await import('../../locales/zh.json'))
				i18n.locale('zh')
			}
		}
		changeLocale()
	}, [router.locale])

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	)
}
