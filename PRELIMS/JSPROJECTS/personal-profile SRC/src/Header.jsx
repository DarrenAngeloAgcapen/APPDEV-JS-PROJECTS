import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <h1> My Personal Profile</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faInfoCircle} /> About
                        </a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
