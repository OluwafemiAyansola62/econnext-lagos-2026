import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      course: form.course.value,
      university: form.university.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwNuGq9HqZ4Sr3xEWI8ezntnH39z6oKzqm3SNVHgiWVzOvqKfr60kvLAAL9iWpazzRhow/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      alert("Registration submitted successfully! ✅");
      form.reset();
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img
              src="/econnext-logo.jpeg"
              alt="Econnext Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">Econnext</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#about">About</a></li>
            <li><a href="#focus">Focus</a></li>
            <li><a href="#why">Why Attend</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4 text-center font-medium">
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#focus" onClick={() => setIsOpen(false)}>Focus</a></li>
              <li><a href="#why" onClick={() => setIsOpen(false)}>Why Attend</a></li>
              <li><a href="#register" onClick={() => setIsOpen(false)}>Register</a></li>
              <li><a href="#sponsors" onClick={() => setIsOpen(false)}>Sponsors</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative bg-black text-white py-32 text-center flex items-center justify-center"
        id="hero"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-pulse"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Econnext Lagos Conference 2026
          </h1>
          <p className="mt-6 text-xl">
            AI • Careers • Internships • Labour Market
          </p>
          <p className="mt-2 text-gray-300">
            Lagos, Nigeria | Free Entry | 3000 Students
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Registration Opening Soon
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20" id="about">
        <h2 className="text-3xl font-bold mb-6">About The Conference</h2>
        <p className="text-lg text-gray-700">
          Econnext Lagos Conference 2026 is a student-centered event designed to
          bridge the gap between academics and the real labour market.
        </p>
      </section>

      {/* FOCUS */}
      <section className="bg-white py-20" id="focus">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Conference Focus
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "AI in Economics & Business",
              "Career Development",
              "Internship Opportunities",
              "Understanding the Labour Market",
            ].map((item) => (
              <div key={item} className="p-6 border rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-6xl mx-auto px-6 py-20" id="why">
        <h2 className="text-3xl font-bold mb-8">Why Attend?</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>• Career clarity after graduation</li>
          <li>• Internship access</li>
          <li>• AI & industry insights</li>
          <li>• Network with 3000+ students</li>
        </ul>
      </section>

      {/* REGISTRATION */}
      <section className="max-w-3xl mx-auto px-6 py-20" id="register">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <input type="text" name="name" placeholder="Full Name" required className="w-full border rounded-lg px-4 py-2" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border rounded-lg px-4 py-2" />
          <input type="text" name="course" placeholder="Course of Study" required className="w-full border rounded-lg px-4 py-2" />
          <input type="text" name="university" placeholder="University" required className="w-full border rounded-lg px-4 py-2" />

          <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            Submit Registration
          </button>
        </form>
      </section>

      {/* SPONSORS */}
      <section className="bg-gray-100 py-20" id="sponsors">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Sponsors & Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"].map((sponsor) => (
              <div key={sponsor} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24">
                <span className="text-gray-500 font-semibold">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-700 mb-4">
              Interested in sponsoring Econnext Lagos 2026?
            </p>
            <a
              href="mailto:econnextlagos@gmail.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center text-sm text-gray-600">
        <p>© 2026 Econnext Lagos Conference. All rights reserved.</p>
        <p className="mt-2">
          Powered by <span className="font-semibold text-black">MODE TECH</span>
        </p>
      </footer>

    </main>
  );
}
