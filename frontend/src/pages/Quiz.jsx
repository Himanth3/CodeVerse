import { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 'q1',
            question: 'What is the output of: print(2 * 3 + 1)?',
            options: [
                { value: '7', label: '7' },
                { value: '8', label: '8' },
                { value: '9', label: '9' }
            ],
            correct: '7'
        },
        {
            id: 'q2',
            question: 'Which keyword is used for a conditional branch?',
            options: [
                { value: 'switch', label: 'switch' },
                { value: 'if', label: 'if' },
                { value: 'define', label: 'define' }
            ],
            correct: 'if'
        },
        {
            id: 'q3',
            question: 'What does the range(5) function return?',
            options: [
                { value: '[1, 2, 3, 4, 5]', label: '[1, 2, 3, 4, 5]' },
                { value: '[0, 1, 2, 3, 4]', label: '[0, 1, 2, 3, 4]' },
                { value: '[0, 1, 2, 3, 4, 5]', label: '[0, 1, 2, 3, 4, 5]' }
            ],
            correct: '[0, 1, 2, 3, 4]'
        },
        {
            id: 'q4',
            question: 'What is the correct way to define a function in Python?',
            options: [
                { value: 'function myFunc():', label: 'function myFunc():' },
                { value: 'def myFunc():', label: 'def myFunc():' },
                { value: 'create myFunc():', label: 'create myFunc():' }
            ],
            correct: 'def myFunc():'
        },
        {
            id: 'q5',
            question: 'Which of these creates a list in Python?',
            options: [
                { value: '(1, 2, 3)', label: 'arr = (1, 2, 3)' },
                { value: '[1, 2, 3]', label: 'arr = [1, 2, 3]' },
                { value: '{1, 2, 3}', label: 'arr = {1, 2, 3}' }
            ],
            correct: '[1, 2, 3]'
        }
    ];

    const handleOptionChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setSubmitted(true);
    };

    const resetQuiz = () => {
        setAnswers({});
        setSubmitted(false);
        setScore(0);
    };

    return (
        <div className="quiz-page">
            <div className="quiz-header glass-panel" style={{padding: '2rem', marginBottom: '2rem', textAlign: 'center'}}>
                <h1 style={{color: 'var(--accent-color)', textShadow: '0 0 10px var(--accent-color)'}}>📝 CodeVerse Programming Quiz</h1>
                <p className="tagline" style={{color: 'var(--text-muted)'}}>Test your knowledge across different languages and frameworks</p>
            </div>

            <div className="quiz-container">
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {questions.map((q, index) => (
                            <div key={q.id} className="question-card">
                                <h3>{index + 1}. {q.question}</h3>
                                <div className="options">
                                    {q.options.map((opt) => (
                                        <label key={opt.value} className={`option-label ${answers[q.id] === opt.value ? 'selected' : ''}`}>
                                            <input
                                                type="radio"
                                                name={q.id}
                                                value={opt.value}
                                                checked={answers[q.id] === opt.value}
                                                onChange={() => handleOptionChange(q.id, opt.value)}
                                                required
                                            />
                                            {opt.label}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="submit" className="submit-btn">Submit Quiz</button>
                    </form>
                ) : (
                    <div className="results-container">
                        <div className={`score-card ${score === questions.length ? 'perfect' : 'good'}`}>
                            <h2>
                                {score === questions.length
                                    ? '🎉 Congratulations! You scored full marks! 🏆'
                                    : '😅 Better luck next time! Keep practicing! 💪'}
                            </h2>
                            <p>You scored {score} out of {questions.length}</p>
                            {score === questions.length && <p>NOW You’re Good at Python ! 💻🐍</p>}
                        </div>
                        <button onClick={resetQuiz} className="retry-btn">Try Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
