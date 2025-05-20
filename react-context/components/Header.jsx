import { useNavigate, Link } from 'react-router-dom';
import { useStoreContext } from '../context/user';

function Header() {
    const navigate = useNavigate();
    const { setLoggedIn, loggedIn, firstName } = useStoreContext();

    function logout() {
        setLoggedIn(false);
        navigate("/");
    }

    return (
        <div className="header">
            <h1>VibeVision</h1>
            {loggedIn ? (
                <>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                navigate(`/movies/search/${e.target.value}`);
                            }
                        }}
                    />
                    <p className="welcome-msg">Welcome {firstName}!</p>
                    <Link to={'/cart'} className="cart-button">Cart</Link>
                    <Link to={'/settings'} className="settings">Settings</Link>
                    <button onClick={logout} className="logout">Logout</button>
                </>
            ) : (
                <>
                    <button onClick={() => navigate('/login')} className="login">Login</button>
                    <button onClick={() => navigate('/register')} className="register">Register</button>
                </>
            )}
        </div>
    );
}

export default Header;
