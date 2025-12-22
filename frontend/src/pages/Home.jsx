import MotivationHero from '../components/MotivationHero';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

    return (
        <div className="home-page">
            {user && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem 0', background: 'var(--bg-color)' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                        Welcome, <span style={{ color: 'var(--primary-color)' }}>{user.username}</span>! 👋
                    </h1>
                </div>
            )}
            <MotivationHero />

            <section className="code-preview-section">
                <div className="container">
                    <h3>✨ Your First Python Code:</h3>
                    <div className="code-block">
                        <pre><code>print("Hello, Coder!")</code></pre>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <div className="container">
                    <h2>🌟 Why Learn Python?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <span className="icon">🔥</span>
                            <h3>High Demand</h3>
                            <p>One of the most sought-after skills in the tech industry.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">🤖</span>
                            <h3>AI & ML</h3>
                            <p>The primary language for Artificial Intelligence and Machine Learning.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">🎯</span>
                            <h3>Simple Syntax</h3>
                            <p>Read and write code almost like plain English.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">💡</span>
                            <h3>Versatile</h3>
                            <p>Build web apps, scripts, data analysis tools, and more.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
