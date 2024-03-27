import Head from "next/head";
import PostsGrid from "../../components/posts/posts-grid";
import { getAllPosts } from "../../lib/post-util";
import classes from "./posts.module.css";

export default function AllPostsPage({ posts }) {
  return (
    <section className={classes.posts}>
      <Head>
        <title>Sandy's Blog | All Posts</title>
        <meta
          name="description"
          content="You can see all of my blog posts on this page."
        />
      </Head>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
