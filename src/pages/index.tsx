import Link from 'next/link'; // Link para navegação entre páginas
import style from './index.module.css';
import posts from '../data/posts.json'; // Data posts.json

// Definindo o tipo dos posts
type Post = {
  id: string;
  title: string;
  description: string;
};

const Home: React.FC = () => {
  // Carregando os posts mockados
  const postsList: Post[] = posts;

  return (
    <div className={style.mainDiv}>
        <div>
            <h1>Bem-vindo ao meu Blog!</h1>
            <p>Explore os artigos mais recentes abaixo:</p>

            <ul className={style.ulist}>
                {postsList.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                    
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Home;