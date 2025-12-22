import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft } from 'lucide-react';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course not found</h2>
                <Link to="/courses" className="btn">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div className="course-detail-page">
            <Link to="/courses" className="back-link">
                <ArrowLeft size={20} /> Back to Courses
            </Link>

            <header className="course-header">
                <h1>{course.title}</h1>
                <p className="tagline">{course.tagline}</p>
            </header>

            <div className="course-content-container">
                <section className="topics-section">
                    <h2>📘 Start from</h2>
                    <ul className="topics-list">
                        {course.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </section>

                <section className="code-preview-section">
                    <h3>👨‍💻 Example Code:</h3>
                    <div className="code-block">
                        <pre><code>{course.codeExample}</code></pre>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CourseDetail;
