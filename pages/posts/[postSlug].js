import Head from "next/head";
import PostContent from "../../components/posts/post-details/post-content";
import { getAllPosts, getPostData } from "../../lib/post-util";

export default function PostPage(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.excerpt} />
      </Head>
      <PostContent {...props} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = getPostData(`${params.postSlug}.md`);
  return {
    props: {
      ...postData,
    },
    notFound: !postData,
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { postSlug: post.slug } })),
    fallback: false,
  };
}
