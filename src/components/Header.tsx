import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>The Blog</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/">
              <p style={styles.navLink}>Início</p>
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/post">
              <p style={styles.navLink}>Posts</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Header;
