import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <p>Address: Fl 13 Rh new Pushpanjali soc, MIDC G, Chinchwad, Pune 411019</p>
            <p>Phone: +91-7758909051</p>
            <p>Email: hhhbinfra@gmail.com</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;