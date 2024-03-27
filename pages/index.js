import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

export default function HomePage({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Sandy's Blog</title>
        <meta
          name="description"
          content="I post about frontend development specifically about ReactJS and NextJS."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts();
  return {
    props: {
      featuredPosts: featuredPosts,
    },
  };
}
