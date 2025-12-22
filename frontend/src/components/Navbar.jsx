import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, BrainCircuit, FolderGit2, Download, Mail, User, LogIn, UserPlus } from 'lucide-react';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Courses', path: '/courses', icon: <BookOpen size={20} /> },
        { name: 'Quiz', path: '/quiz', icon: <BrainCircuit size={20} /> },
        { name: 'Projects', path: '/projects', icon: <FolderGit2 size={20} /> },
        { name: 'Download', path: '/download', icon: <Download size={20} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
        // Auth Links (Ideally show conditionally based on auth state, but for now showing all)
        { name: 'Profile', path: '/profile', icon: <User size={20} /> },
        { name: 'Login', path: '/login', icon: <LogIn size={20} /> },
        { name: 'Signup', path: '/signup', icon: <UserPlus size={20} /> },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">🐍</span> py Coder
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn mobile-only" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu mobile-only">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
