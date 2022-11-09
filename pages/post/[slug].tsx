import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.scss';
import {
    getSinglePost
} from '../../helpers/ghostApi';

import { wrapper } from '../../store'
import { useSelector } from 'react-redux'
import { selectBlogState } from '../../store/blogs';

type Post = {
    title: string,
    html: string
}

const Post: React.FC<{ post: Post }> = props => {
    const {  } = useSelector(selectBlogState)
    const { post } = props;
    const router = useRouter()
    if(router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={styles.container}>
            <Link href='/'>Go back</Link>
            <div dangerouslySetInnerHTML={{ __html: post?.html }} ></div>
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps(
    (store) =>
      async ({ params }) => {
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        console.log("State on server 222", store.getState());
        const post = await getSinglePost(params.slug) || [];
        return {
            props: {
                post
            },
            revalidate: 10
        }
        }
  );

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

export default Post;