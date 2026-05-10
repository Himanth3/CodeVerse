import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-page">
            <div className="courses-hero">
                <motion.div
                    className="courses-hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="page-badge">📚 All Courses</span>
                    <h1>Explore the <span className="gradient-text">CodeVerse</span></h1>
                    <p>Master programming from the ground up — Java, Python, Git, REST APIs, Spring Boot and more.</p>
                </motion.div>
            </div>

            <div className="courses-grid">
                {courses.map((course, i) => (
                    <motion.div
                        key={course.id}
                        className="course-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    >
                        <div className="card-image">
                            <img src={course.image} alt={course.title} loading="lazy" />
                            <div className="card-image-overlay" />
                        </div>
                        <div className="card-content">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <Link to={`/courses/${course.id}`} className="card-btn">
                                Start Course →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
