import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {
  getPosts
} from '../helpers/ghostApi';

import { wrapper } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { selectBlogState} from '../store/blogs';

type Post = {
  title: string,
  slug: string,
  id: string
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const {  } = useSelector(selectBlogState)
  const dispatch = useDispatch()

  const {
    posts = []
  } = props;
  return (
    <div className={styles.container}>
     <h1>Hello to my blog</h1>
     <ul>
      {posts.map((item,index) => (
        <li  key={index}>
          <Link href={`/post/${item.slug}`}> 
          {item.title} , Slug: {item.slug}, ID; {item.id} </Link>
        </li>
      ))}
     </ul>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      const posts = await getPosts();
      const allPosts = JSON.parse(JSON.stringify(posts));
      return {
        props: { 
          posts: allPosts
        },
        revalidate: 10
      }
  };

// export const getStaticProps = wrapper.getStaticProps(
//   (store) =>
//     async ({ params }) => {
//       // we can set the initial state from here
//       // we are setting to false but you can run your custom logic here
//       const posts = await getPosts();
//       const allPosts = JSON.parse(JSON.stringify(posts));
//       return {
//         props: { 
//           posts: allPosts
//         },
//         revalidate: 10
//       }
//     }
// );

export default Home;