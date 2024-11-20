
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import GameReview from './GameReview';

function App() {
    const [username, setUsername] = useState(null);

    const handleLogin = (user) => {
        setUsername(user);
    };

    return (
        <>
            <Header />
            <main>
                {!username ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <GameReview username={username} />
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
