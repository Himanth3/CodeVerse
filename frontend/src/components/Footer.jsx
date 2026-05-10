import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">🌌 <strong>Code<span>Verse</span></strong></span>
                    <p>Your universe for mastering code.<br/>Learn. Build. Launch. 🚀</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Learn</h4>
                        <Link to="/courses">Courses</Link>
                        <Link to="/quiz">Quiz</Link>
                        <Link to="/download">Downloads</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Build</h4>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Account</h4>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Made with <span className="heart">❤️</span> by <strong>Himanth Bammidi</strong></p>
                <p>© {year} CodeVerse. Keep pushing forward ⏩</p>
            </div>
        </footer>
    );
};

export default Footer;
