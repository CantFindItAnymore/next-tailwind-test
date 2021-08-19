import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
import Layout from '../components/Layout'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import test from '../public/222.jpg'

function Home({ dog }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(dog)
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<p className={`text-purple-600 ${styles.container}`}>{dog}</p>
			<Image src={dog} alt='' width={500} height={500} />
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

export const getStaticProps: GetStaticProps = async context => {
	const res = await fetch('https://dog.ceo/api/breeds/image/random')
	const json = await res.json()

	return {
		props: {
			dog: json.message,
		},
	}
}

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

// 请求时获取数据
// export async function getServerSideProps(context) {
// 	console.log('context', context)
// 	return {
// 		props: {
// 			// props for your component
// 			dog: 'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4331.jpg',
// 		},
// 	}
// }

export default Home
