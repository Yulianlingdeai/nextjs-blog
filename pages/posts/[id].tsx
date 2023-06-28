import React from "react"
import Head from "next/head"
import Date from "../../components/date"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import utilStyles from '../../styles/utils.module.css'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default function Post({ postData }: any) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			{/* {postData.date} */}
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
			{/* {postData.title}
			<br />
			{postData.id}
			<br />
			<Date dateString={postData.date} />
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
		</Layout>
	)
}

/**获取静态路径，这是一个固定函数 */
export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

/**获取静态Props，这是一个固定函数 */
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}
