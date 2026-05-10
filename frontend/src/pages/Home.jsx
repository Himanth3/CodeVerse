import MotivationHero from '../components/MotivationHero';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './Home.css';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('access');
            if (token) {
                try {
                    const response = await api.get('profile/');
                    setUser(response.data);
                } catch (error) {
                    console.error("Failed to fetch user", error);
                }
            }
        };
        fetchUser();
    }, []);

    const benefits = [
        { icon: '🚀', title: 'High Demand', desc: 'One of the most sought-after skill sets in the global tech industry.' },
        { icon: '🧠', title: 'Problem Solving', desc: 'Coding teaches you to think logically and solve complex challenges.' },
        { icon: '🌍', title: 'Build Anything', desc: 'From web apps to AI systems — the universe is your playground.' },
        { icon: '💼', title: 'Future Proof', desc: 'Secure your career by mastering the foundation of the digital world.' },
    ];

    return (
        <div className="home-page">
            {user && (
                <motion.div
                    className="welcome-banner"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Welcome back, <span>{user.username}</span>! 👋</h1>
                </motion.div>
            )}

            <MotivationHero />

            <section className="code-preview-section">
                <motion.div
                    className="code-preview-inner glass-panel"
                    style={{ padding: '2rem', margin: '0 auto 1rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>✨ Your first line of code:</h3>
                    <div className="code-block">
                        <code>System.out.println("Hello, CodeVerse! 🌌");</code>
                    </div>
                </motion.div>
            </section>

            <section className="benefits-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        🌟 Why Learn to Code?
                    </motion.h2>
                    <div className="benefits-grid">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={b.title}
                                className="benefit-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <span className="icon">{b.icon}</span>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
