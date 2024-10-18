function Home() {
  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl">
      <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Your Learning Journey</h1>
          <p>Explore, Learn, and Grow with our comprehensive Learning Management System. Empowering you with the knowledge and skills to succeed in today's digital world.</p>
          <a href="#features" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Wide Range of Courses</h3>
              <p>We offer a variety of courses across multiple disciplines, from web development to data science and more.</p>
            </div>
            <div className="card">
              <h3>Interactive Learning</h3>
              <p>Engage in interactive lessons and quizzes designed to enhance your learning experience.</p>
            </div>
            <div className="card">
              <h3>Flexible Schedules</h3>
              <p>Learn at your own pace with our flexible, on-demand course materials accessible 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Your Learning Journey Today</h2>
          <p>Join thousands of learners around the world and gain the skills to succeed in your career.</p>
          <a href="/signup" className="cta-button">Sign Up Now</a>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;




