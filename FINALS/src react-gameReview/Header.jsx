import './Header.css'
export default function Header() {
    return(
      <header>
        <h1>Game Review</h1>
        <nav>
          <ul>
            <li><a href="./Login.jsx">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <hr />
      </header>  
    );
}