/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function i18ntest() {
	const router = useRouter()
	const i18n = useI18n()

	useEffect(() => {
		async function changeLocale() {
			if (router.locale === 'en') {
				i18n.set('en', await import('../locales/en.json'))
				i18n.locale('en')
			} else if (router.locale === 'zh') {
				i18n.set('zh', await import('../locales/zh.json'))
				i18n.locale('zh')
			}
		}
		changeLocale()
	}, [router.locale])

	return (
		<div>
			<h1>
				{i18n.t('intro.text')}, {i18n.t('intro.welcome', { username: 'rjx' })}
			</h1>
			<div>当前语言： {router.locale}</div>
			<div>
				<Link href='/i18ntest' locale='en'>
					<a>英语</a>
				</Link>
			</div>
			<div>
				<Link href='/i18ntest' locale='zh'>
					<a>中文</a>
				</Link>
			</div>
			i18ntest
		</div>
	)
}
