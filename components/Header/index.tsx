import React from 'react'
import { useI18n } from 'next-localization'
import Link from 'next/link'
import styles from './index.module.css'

export default function Header() {
	const i18n = useI18n()

	return (
		<div className={styles.header}>
			<div>
				<Link href='/'>
					<a>{i18n.t('home')}</a>
				</Link>
			</div>
		</div>
	)
}
