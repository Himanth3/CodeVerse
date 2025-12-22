import './Projects.css';

const Projects = () => {
    const projectCategories = [
        {
            title: '🔰 Beginner Projects',
            projects: [
                {
                    title: '📊 Student Grade Calculator',
                    description: 'Take input scores and calculate total, average, and grade using Python basics.'
                },
                {
                    title: '📝 To-Do List App (Console)',
                    description: 'Build a text-based task manager using lists, loops, and functions.'
                },
                {
                    title: '🎲 Number Guessing Game',
                    description: 'Use conditionals and loops to create an interactive CLI game.'
                },
                {
                    title: '📆 Simple Calendar Reminder',
                    description: 'Store reminders with dates using dictionaries and file handling.'
                }
            ]
        },
        {
            title: '🚀 Intermediate Projects',
            projects: [
                {
                    title: '🌐 Flask Blog Website',
                    description: 'Create a basic blog using Flask with routing and templates.'
                },
                {
                    title: '📂 File Organizer',
                    description: 'Write a script to sort files in a folder by type using Python\'s OS module.'
                }
            ]
        }
    ];

    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>💡 Python Project Ideas</h1>
                <p className="tagline">Practice by building! Start with fun and real-world Python projects.</p>
            </header>

            <div className="projects-container">
                {projectCategories.map((category, index) => (
                    <section key={index} className="project-category">
                        <h2>{category.title}</h2>
                        <div className="project-list">
                            {category.projects.map((project, pIndex) => (
                                <div key={pIndex} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Projects;
