import Link from 'next/link';

// Tipo para os posts
type Post = {
  id: string;
  title: string;
  description: string;
};

const Home: React.FC = () => {
  const posts: Post[] = [
    { id: '1', title: 'Primeiro Post', description: 'Introdução ao meu blog' },
    { id: '2', title: 'Next.js é incrível', description: 'Por que usar Next.js?' },
  ];

  return (
    <div>
      <h1>Bem-vindo ao meu Blog!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;