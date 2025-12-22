import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-page">
            <header className="courses-header">
                <h1>📚 Python Courses</h1>
                <p className="tagline">Master Python – From Basics to Web Development 🚀</p>
            </header>

            <div className="courses-grid">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <div className="card-image">
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className="card-content">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <Link to={`/courses/${course.id}`} className="btn">Start Course</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
