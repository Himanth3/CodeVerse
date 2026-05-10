import { motion } from 'framer-motion';
import { FileText, Download as DownloadIcon, BookOpen, Code2, GitBranch, Coffee, Globe, Database } from 'lucide-react';
import './Download.css';

const categories = [
    {
        title: 'Java Resources',
        icon: <Coffee size={20} />,
        color: '#f59e0b',
        items: [
            { name: 'Core Java Programming — Learning Guide', file: '/pdfs/Java_Programming_Learning_Guide.pdf', size: '4.7 KB' },
            { name: 'Java + DSA — Learning Guide', file: '/pdfs/Java_DSA_Learning_Guide.pdf', size: '4.9 KB' },
        ]
    },
    {
        title: 'Python Resources',
        icon: <Code2 size={20} />,
        color: '#3b82f6',
        items: [
            { name: '🐍 Python Basics Notes', file: '/pdfs/🐍 Python Notes.pdf', size: '3.7 MB' },
            { name: '🐍 Python Cheat Codes', file: '/pdfs/🐍 Python Cheat Codes.pdf', size: '3.7 MB' },
            { name: 'DSA with Python — Cheat Sheet', file: '/pdfs/DSA_with_Python_CheatSheet.pdf', size: '3.4 KB' },
            { name: '6-Month DSA Study Plan (Python)', file: '/pdfs/Python Dsa.pdf', size: '30 KB' },
        ]
    },
    {
        title: 'Python Practice Questions',
        icon: <BookOpen size={20} />,
        color: '#10b981',
        items: [
            { name: 'if-elif-else Conditional Questions', file: '/pdfs/python_conditional_questions.pdf', size: '1.6 KB' },
            { name: 'Loops Practice Questions', file: '/pdfs/python_Loop_Questions.pdf', size: '3.8 MB' },
            { name: 'Function Practice Questions', file: '/pdfs/python_function_question.pdf', size: '3.7 MB' },
            { name: 'Arrays Practice Questions', file: '/pdfs/python_Array_Questions.pdf', size: '3.8 MB' },
        ]
    },
    {
        title: 'Git & GitHub',
        icon: <GitBranch size={20} />,
        color: '#f43f5e',
        items: [
            { name: 'Git & GitHub — Learning Guide', file: '/pdfs/Git_GitHub_Learning_Guide.pdf', size: '4.4 KB' },
        ]
    },
    {
        title: 'Backend Development',
        icon: <Globe size={20} />,
        color: '#7c3aed',
        items: [
            { name: 'REST API — Learning Guide', file: '/pdfs/REST_API_Learning_Guide.pdf', size: '4.5 KB' },
            { name: 'Spring Boot — Learning Guide', file: '/pdfs/Spring_Boot_Learning_Guide.pdf', size: '4.5 KB' },
        ]
    },
];

const Download = () => {
    return (
        <div className="download-page">
            {/* Hero */}
            <motion.div
                className="download-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="page-badge">📥 Free Resources</span>
                <h1>Download <span className="gradient-text">Study Materials</span></h1>
                <p>Handpicked notes, cheat sheets, practice questions, and learning guides — all free.</p>
                <div className="download-stats">
                    <div className="stat">
                        <strong>13</strong>
                        <span>Files</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <strong>5</strong>
                        <span>Topics</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <strong>100%</strong>
                        <span>Free</span>
                    </div>
                </div>
            </motion.div>

            {/* Categories */}
            <div className="download-categories">
                {categories.map((cat, ci) => (
                    <motion.section
                        key={cat.title}
                        className="download-category glass-panel"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1, duration: 0.5 }}
                    >
                        <div className="category-header" style={{ '--cat-color': cat.color }}>
                            <span className="category-icon">{cat.icon}</span>
                            <h2>{cat.title}</h2>
                            <span className="category-count">{cat.items.length} file{cat.items.length > 1 ? 's' : ''}</span>
                        </div>

                        <div className="downloads-list">
                            {cat.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="download-item"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="file-info">
                                        <FileText size={20} className="file-icon" style={{ color: cat.color }} />
                                        <div className="file-details">
                                            <span className="file-name">{item.name}</span>
                                            <span className="file-size">{item.size}</span>
                                        </div>
                                    </div>
                                    <a
                                        href={item.file}
                                        download
                                        className="download-btn"
                                        style={{ '--btn-color': cat.color }}
                                    >
                                        <DownloadIcon size={15} />
                                        <span>Download</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default Download;
