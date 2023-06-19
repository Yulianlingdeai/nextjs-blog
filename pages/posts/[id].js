import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

export default function Post({ postData }) {
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	)
}

/**获取静态路径 */
export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

/**获取静态Props */
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}
