import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact <span>Us</span></h2>
        <p>
          Have questions about admissions or our school?
          We would love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Our Address</h3>
              <p>Karachi, Pakistan</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone Number</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email Address</h3>
              <p>info@scholarsacademy.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>School Timings</h3>
              <p>Monday - Saturday: 8:00 AM - 2:00 PM</p>
            </div>
          </div>

        </div>

        <div className="contact-message">
          <h3>We Are Here To Help</h3>

          <p>
            Whether you want to know about admissions, academics,
            faculty, or school activities, feel free to contact us.
          </p>

          <button>📞 Contact School</button>
        </div>

      </div>
    </section>
  );
}

export default Contact;