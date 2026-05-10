import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, BrainCircuit, FolderGit2, Download, Mail, User, LogIn, UserPlus, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('cv-theme') || 'dark');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Apply theme on mount and change
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cv-theme', theme);
    }, [theme]);

    // Navbar shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    const navLinks = [
        { name: 'Home',     path: '/',         icon: <Home size={17} /> },
        { name: 'Courses',  path: '/courses',   icon: <BookOpen size={17} /> },
        { name: 'Quiz',     path: '/quiz',      icon: <BrainCircuit size={17} /> },
        { name: 'Projects', path: '/projects',  icon: <FolderGit2 size={17} /> },
        { name: 'Download', path: '/download',  icon: <Download size={17} /> },
        { name: 'Contact',  path: '/contact',   icon: <Mail size={17} /> },
    ];

    const authLinks = [
        { name: 'Profile', path: '/profile', icon: <User size={17} /> },
        { name: 'Login',   path: '/login',   icon: <LogIn size={17} /> },
        { name: 'Signup',  path: '/signup',  icon: <UserPlus size={17} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">🌌</span>
                    <span className="logo-text">Code<span className="logo-accent">Verse</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop Right Side */}
                <div className="nav-right desktop-only">
                    {authLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link nav-link--auth ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        aria-label="Toggle theme"
                    >
                        <span className="toggle-track">
                            <span className={`toggle-thumb ${theme === 'light' ? 'toggle-thumb--light' : ''}`}>
                                {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
                            </span>
                        </span>
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="mobile-controls mobile-only">
                    <button className="theme-toggle-icon" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="mobile-menu mobile-only">
                    <div className="mobile-menu-section">
                        <p className="mobile-section-label">Navigation</p>
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="mobile-menu-section">
                        <p className="mobile-section-label">Account</p>
                        {authLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
