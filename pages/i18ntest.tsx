/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function i18ntest() {
	const router = useRouter()
	const i18n = useI18n()

	return (
		<Layout>
			<h1>
				{i18n.t('intro.text')}, {i18n.t('intro.welcome', { username: 'rjx' })}
			</h1>
			<div>当前语言： {router.locale}</div>
			<div>
				<Link href='/i18ntest' replace locale='en'>
					<a>english</a>
				</Link>
			</div>
			<div>
				<Link href='/i18ntest' replace locale='zh'>
					<a>中文</a>
				</Link>
			</div>
		</Layout>
	)
}
