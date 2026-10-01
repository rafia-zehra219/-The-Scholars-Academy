import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🎓 The Scholars Academy</h2>

          <p>
            Inspiring young minds, building bright futures.
            We are committed to providing quality education
            and a positive learning environment.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About School</a>
          <a href="#academics">Academics</a>
          <a href="#faculty">Faculty</a>
          <a href="#admission">Admission</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📍 Karachi, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ info@scholarsacademy.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 The Scholars Academy. All Rights Reserved.
        </p>

        <p>
          Designed & Developed with Rafia-zehra;
        </p>
      </div>

    </footer>
  );
}

export default Footer;