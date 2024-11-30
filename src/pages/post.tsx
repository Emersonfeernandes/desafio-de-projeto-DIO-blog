import { useRouter } from 'next/router';

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Ainda a preencher</h1>
      <p></p>
    </div>
  );
};

export default Post;
