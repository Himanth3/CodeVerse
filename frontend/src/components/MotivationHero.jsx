import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MotivationHero.css';

const MotivationHero = () => {
    const codeLines = [
        "import future",
        "def start_journey():",
        "    skill = 'Python'",
        "    success = True",
        "    return success",
        "start_journey()"
    ];

    return (
        <section className="motivation-hero">
            <div className="hero-content">
                <motion.div
                    className="text-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Empower Your Mind. <br />
                        <span className="highlight">Transform Your Future.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        One line of code at a time. Join thousands of learners mastering Python today.
                    </motion.p>
                    <motion.div
                        className="cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link to="/courses" className="cta-button primary">Start Learning 🧠</Link>
                        <Link to="/projects" className="cta-button secondary">View Projects 🚀</Link>
                    </motion.div>
                </motion.div>

                <div className="animation-container">
                    <div className="code-window">
                        <div className="window-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            {codeLines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    className="code-line"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                                >
                                    <span className="line-number">{index + 1}</span>
                                    <span className="code-text">{line}</span>
                                </motion.div>
                            ))}
                            <motion.div
                                className="cursor"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                            />
                        </div>
                    </div>

                    <motion.div
                        className="floating-elements"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        <motion.div
                            className="element python-logo"
                            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            🐍
                        </motion.div>
                        <motion.div
                            className="element rocket"
                            animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                        >
                            🚀
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="background-glow"></div>
        </section>
    );
};

export default MotivationHero;
