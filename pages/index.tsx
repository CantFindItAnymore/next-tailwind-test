import Head from 'next/head'
import Image from 'next/image'

import { useI18n } from 'next-localization'
import styles from './index.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import {
	GetStaticProps,
	InferGetStaticPropsType,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next'

function Home({ dog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const i18n = useI18n()
	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>
			{/* <p className={`text-purple-600 ${styles.container}`}>{dog}</p> */}
			<Image src={dog} alt='' width={500} height={500} />
			<div>
				<Link href='/i18ntest'>
					<a>{i18n.t('i18n')}</a>
				</Link>
			</div>
			<div>
				<Link href='/carouselPage'>
					<a>{i18n.t('carouselPage')}</a>
				</Link>
			</div>
		</Layout>
	)
}

// - 构建时获取数据【页面-内容-依赖于外部数据】
// - 只能从页面导出

// 您应该在以下情况下使用getStaticProps：
// 呈现页面所需的数据在用户请求之前的构建时间可用。
// 数据来自无头 CMS。
// 数据可以公开缓存（不是特定于用户的）。
// 页面必须预渲染（用于 SEO）并且非常快——getStaticProps生成 HTML 和 JSON 文件，这两个文件都可以由 CDN 缓存以提高性能。

// export const getStaticProps: GetStaticProps = async context => {
// 	const res = await fetch('https://dog.ceo/api/breeds/image/random')
// 	const json = await res.json()

// 	return {
// 		props: {
// 			dog: json.message,
// 		},
// 	}
// }

// 构建时获取数据【页面-路径-依赖于外部数据】
// - 只能从页面导出

// 我应该什么时候使用getStaticPaths？
// getStaticPaths如果您静态预渲染使用动态路由的页面，则应该使用。

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{ params: {} }, // See the "paths" section below
// 		],
// 		fallback: false, // See the "fallback" section below
// 	}
// }

// 在页面请求时获取数据
export const getServerSideProps: GetServerSideProps = async context => {
	// console.log('context', context)
	const res = await fetch('https://dog.ceo/api/breeds/image/random')
	const json = await res.json()
	return {
		props: {
			// props for your component
			dog: json.message,
		},
	}
}

export default Home
