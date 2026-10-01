import './App.css'

import Admission from "./components/Admission";

import Contact from "./components/Contact";

import Footer from "./components/Footer";

function App() {

  return (

    <>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <a className="navbar-brand fw-bold" href="#">

            🎓 The Scholars Academy

          </a>

          <button

            className="navbar-toggler"

            type="button"

            data-bs-toggle="collapse"

            data-bs-target="#navbarNav"

          >

            <span className="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">

                <a className="nav-link" href="#">Home</a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#">About</a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#">Academics</a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#">Faculty</a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#">Gallery</a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#">Contact</a>

              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="hero">

        <div className="container">

          <div className="hero-content">

            <p className="welcome">WELCOME TO</p>

            <h1>The Scholars Academy</h1>

            <p className="tagline">

              Inspiring Minds, Shaping Futures

            </p>

            <p className="description">

              We provide quality education and create a positive

              environment where students can learn, grow and achieve

              their dreams.

            </p>

            <div className="mt-4">

              <button className="btn btn-primary btn-lg me-3">

                Apply Now

              </button>

              <button className="btn btn-outline-light btn-lg">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Welcome Section */}

      <section className="welcome-section py-5">

        <div className="container text-center">

          <h2>Welcome to The Scholars Academy</h2>

          <p className="mt-3">

            Our mission is to empower students with knowledge,

            confidence and skills for a successful future.

          </p>

        </div>

      </section>

      {/* About Section */}

<section className="about-section py-5">

  <div className="container">

    <div className="row align-items-center g-5">

      <div className="col-lg-6">

        <img

          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"

          alt="Students studying"

          className="img-fluid rounded-4 shadow"

        />

      </div>

      <div className="col-lg-6">

        <p className="section-title">ABOUT OUR SCHOOL</p>

        <h2 className="section-heading">

          Building a Brighter Future Through Education

        </h2>

        <p className="section-text">

          The Scholars Academy is dedicated to providing quality

          education in a safe, friendly and inspiring environment.

          We encourage students to discover their talents,

          develop confidence and prepare for a successful future.

        </p>

        <button className="btn btn-primary mt-2">

          Discover More

        </button>

      </div>

    </div>

  </div>

</section>

{/* Why Choose Us */}

<section className="why-section py-5">

  <div className="container">

    <div className="text-center mb-5">

      <p className="section-title">WHY CHOOSE US</p>

      <h2 className="section-heading">

        What Makes Us Different?

      </h2>

      <p className="section-text mx-auto">

        We focus on education, character building and the overall

        development of every student.

      </p>

    </div>

    <div className="row g-4">

      {/* Card 1 */}

      <div className="col-md-4">

        <div className="feature-card text-center">

          <div className="feature-icon">🎓</div>

          <h4>Quality Education</h4>

          <p>

            We provide a strong academic foundation and encourage

            students to become lifelong learners.

          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="col-md-4">

        <div className="feature-card text-center">

          <div className="feature-icon">👩‍🏫</div>

          <h4>Experienced Faculty</h4>

          <p>

            Our teachers guide students with care, knowledge and

            dedication.

          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="col-md-4">

        <div className="feature-card text-center">

          <div className="feature-icon">🌟</div>

          <h4>Student Development</h4>

          <p>

            We help students develop confidence, creativity,

            communication and leadership skills.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Academics Section */}

<section className="academics-section py-5">

  <div className="container">

    <div className="text-center mb-5">

      <p className="section-title">OUR ACADEMICS</p>

      <h2 className="section-heading">

        Learning For Every Stage

      </h2>

      <p className="section-text mx-auto">

        Our academic programs are designed to help students

        learn, explore and prepare for their future.

      </p>

    </div>

    <div className="row g-4">

      {/* Primary */}

      <div className="col-md-4">

        <div className="academic-card">

          <div className="academic-icon">📖</div>

          <h3>Primary School</h3>

          <p>

            Building strong foundations through engaging lessons,

            creativity and fun learning activities.

          </p>

          <button className="btn btn-outline-primary">

            Learn More

          </button>

        </div>

      </div>

      {/* Middle */}

      <div className="col-md-4">

        <div className="academic-card">

          <div className="academic-icon">🔬</div>

          <h3>Middle School</h3>

          <p>

            Developing critical thinking, communication and

            problem-solving skills through interactive learning.

          </p>

          <button className="btn btn-outline-primary">

            Learn More

          </button>

        </div>

      </div>

      {/* Secondary */}

      <div className="col-md-4">

        <div className="academic-card">

          <div className="academic-icon">🎓</div>

          <h3>Secondary School</h3>

          <p>

            Preparing students academically and personally for

            higher education and future opportunities.

          </p>

          <button className="btn btn-outline-primary">

            Learn More

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Faculty Section */}

<section className="faculty-section py-5">

  <div className="container">

    <div className="text-center mb-5">

      <p className="section-title">OUR FACULTY</p>

      <h2 className="section-heading">

        Meet Our Teachers

      </h2>

      <p className="section-text mx-auto">

        Dedicated educators who guide and inspire our students

        every day.

      </p>

    </div>

    <div className="row g-4">

      {/* Teacher 1 */}

      <div className="col-md-4">

        <div className="teacher-card">

          <img

          src="https://randomuser.me/api/portraits/women/44.jpg"

            alt="Principal"

          />

          <div className="teacher-info">

            <h4>Ms. Sarah Ahmed</h4>

            <p>Principal</p>

            <small>

              Academic Leadership & Administration

            </small>

          </div>

        </div>

      </div>

      {/* Teacher 2 */}

      <div className="col-md-4">

        <div className="teacher-card">

          <img

          src="https://randomuser.me/api/portraits/men/32.jpg"

            alt="Science Teacher"

          />

          <div className="teacher-info">

            <h4>Mr. Ali Khan</h4>

            <p>Science Teacher</p>

            <small>

              Science & Mathematics

            </small>

          </div>

        </div>

      </div>

      {/* Teacher 3 */}

      <div className="col-md-4">

        <div className="teacher-card">

          <img

           src="https://randomuser.me/api/portraits/women/65.jpg"

            alt="English Teacher"

          />

          <div className="teacher-info">

            <h4>Ms. Ayesha Noor</h4>

            <p>English Teacher</p>

            <small>

              English Language & Literature

            </small>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

 <Admission />

 <Contact />

 <Footer />

    </>

  )

}

export default App