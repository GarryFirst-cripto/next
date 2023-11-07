import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
  }
};

const Post = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;