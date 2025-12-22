import { FileText, Download as DownloadIcon } from 'lucide-react';
import './Download.css';

const Download = () => {
    const downloads = [
        { name: '🐍 Python Basics Notes (PDF)', file: '/pdfs/🐍 Python Notes.pdf' },
        { name: '🐍 Python Cheat Codes.pdf', file: '/pdfs/🐍 Python Cheat Codes.pdf' },
        { name: 'if-elif-else Questions', file: '/pdfs/python_conditional_questions.pdf' },
        { name: 'Loops Questions', file: '/pdfs/python_Loop_Questions.pdf' },
        { name: 'Function Questions', file: '/pdfs/python_function_question.pdf' },
        { name: 'Arrays Questions', file: '/pdfs/python_Array_Questions.pdf' },
        { name: 'DSA Cheatsheet', file: '/pdfs/DSA_with_Python_CheatSheet.pdf' },
        { name: '6-Months Study Plan for DSA', file: '/pdfs/Python Dsa.pdf' }
    ];

    return (
        <div className="download-page">
            <header className="download-header">
                <h1>⬇️ Download Resources</h1>
                <p className="tagline">Get notes, sample coding Questions, and more</p>
            </header>

            <div className="downloads-container">
                <h2>📂 Available Downloads</h2>
                <div className="downloads-list">
                    {downloads.map((item, index) => (
                        <div key={index} className="download-item">
                            <div className="file-info">
                                <FileText size={24} className="file-icon" />
                                <span>{item.name}</span>
                            </div>
                            <a href={item.file} download className="download-btn">
                                <DownloadIcon size={18} /> Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Download;
