import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/showcase" style={styles.link}>Showcase</Link>
      <Link to="/products" style={styles.link}>Products</Link>
      <Link to="/profile" style={styles.link}>Company Profile</Link>
      <Link to="/developer" style={styles.link}>Developers</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
