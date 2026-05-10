import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MotivationHero.css';

const codeLines = [
    { raw: "import future",              parts: [{ cls: 'kw', t: 'import' }, { cls: '', t: ' future' }] },
    { raw: "class CodeVerse:",           parts: [{ cls: 'kw', t: 'class' }, { cls: 'fn', t: ' CodeVerse' }, { cls: '', t: ':' }] },
    { raw: "    skill = 'Anything'",     parts: [{ cls: '', t: '    skill = ' }, { cls: 'str', t: "'Anything'" }] },
    { raw: "    success = True",         parts: [{ cls: '', t: '    success = ' }, { cls: 'bool', t: 'True' }] },
    { raw: "    return success",         parts: [{ cls: 'kw', t: '    return' }, { cls: '', t: ' success' }] },
    { raw: "CodeVerse().launch() 🚀",    parts: [{ cls: 'fn', t: 'CodeVerse' }, { cls: '', t: '().' }, { cls: 'fn', t: 'launch' }, { cls: '', t: '() 🚀' }] },
];

const MotivationHero = () => {
    return (
        <section className="motivation-hero">
            <div className="hero-content">
                {/* ---- Text ---- */}
                <motion.div
                    className="text-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        🌌 Multi-Language Learning Platform
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Master Coding.<br />
                        <span className="highlight">Explore the Universe.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        From Python to Java, Git to APIs — CodeVerse is your launchpad to a 
                        thriving dev career. Learn by doing, one line at a time.
                    </motion.p>

                    <motion.div
                        className="cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link to="/courses" className="cta-button primary">🚀 Start Learning</Link>
                        <Link to="/projects" className="cta-button secondary">💡 View Projects</Link>
                    </motion.div>
                </motion.div>

                {/* ---- Code Window ---- */}
                <div className="animation-container">
                    <div className="code-window">
                        <div className="window-header">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                            <span className="window-title">codeverse.py</span>
                        </div>
                        <div className="code-content">
                            {codeLines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    className="code-line"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.18, duration: 0.5 }}
                                >
                                    <span className="line-number">{index + 1}</span>
                                    <span className="code-text">
                                        {line.parts.map((p, i) => (
                                            <span key={i} className={p.cls}>{p.t}</span>
                                        ))}
                                    </span>
                                </motion.div>
                            ))}
                            <motion.div
                                className="cursor"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.9 }}
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
                            className="element code-logo"
                            animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                        >
                            💻
                        </motion.div>
                        <motion.div
                            className="element rocket"
                            animate={{ y: [0, -28, 0], x: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
                        >
                            🚀
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="background-glow" />
        </section>
    );
};

export default MotivationHero;
