import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">We're here to help and answer any questions you might have</p>
                </div>

                <div className="contact-content">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                className="form-input message-box"
                                placeholder="Your Message"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            SEND MESSAGE
                        </button>
                    </form>

                    <div className="contact-details">
                        <h2 className="details-title">Our Information</h2>
                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="detail-text">
                                <h3>Email Us</h3>
                                <p>contact@yourcompany.com</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fab fa-discord"></i>
                            </div>
                            <div className="detail-text">
                                <h3>Join Our Discord</h3>
                                <p>discord.gg/yourcommunity</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="detail-text">
                                <h3>GitHub</h3>
                                <p>github.com/yourusername</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;