import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>📞 Contact Us</h1>
                <p className="tagline">We'd love to hear from you!</p>
            </header>

            <div className="contact-container">
                <div className="contact-form-section">
                    <h2>Send us a message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                <div className="contact-info-section">
                    <h3>Follow Us</h3>
                    <div className="info-list">
                        <div className="info-item">
                            <Mail className="icon" />
                            <span>himanthbammidi2004@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span>+91 79896 88049</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>Mangalagiri, India</span>
                        </div>
                        <a href="https://github.com/Himanth3" target="_blank" rel="noopener noreferrer" className="info-item link">
                            <Github className="icon" />
                            <span>@Himanth3</span>
                        </a>
                        <a href="https://www.linkedin.com/in/himanth-bammidi" target="_blank" rel="noopener noreferrer" className="info-item link">
                            <Linkedin className="icon" />
                            <span>himanth-bammidi</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
