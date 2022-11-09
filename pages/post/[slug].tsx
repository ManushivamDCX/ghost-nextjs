import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import { getSinglePost } from "../../helpers/ghostApi";

type Post = {
  title: string;
  html: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post = {
    title: '',
    html: ''
  } } = props;
  const router = useRouter();

  if (router?.isFallback) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div className={styles.container}>
      <Link href="/">Go back</Link>
      <div dangerouslySetInnerHTML={{ __html: post?.html }}></div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = (await getSinglePost(params.slug)) || {};
  const singlePost = JSON.parse(JSON.stringify(post));
  return {
    props: {
      post: singlePost,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Post;
