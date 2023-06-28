import React from "react"
import Head from "next/head"
import Link from "next/link"
import Date from '../components/date'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"

type postsDataProps = {
	id: string;
	date: string;
	title: string;
}
export default function Home({ allPostsData }: { allPostsData: postsDataProps[] }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello I'm Yulianlingdeai</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href='https://www.nextjs.cn/learn'>our Next.js tutorial</a>.)
				</p>
				<Link href='/posts/first-post'>this page!</Link>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>	
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => {
						{/* <li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li> */}
						return <li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					})}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
