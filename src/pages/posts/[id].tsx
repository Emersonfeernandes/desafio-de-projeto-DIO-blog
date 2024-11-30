import { GetStaticPaths, GetStaticProps } from 'next';
import posts from '../../data/posts.json';

type Post = {
  id: string;
  title: string;
  content: string;
};

type PostProps = {
  post: Post;
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const post = posts.find((p) => p.id === id);

  return { props: { post } };
};

export default Post;
