import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      alert("Registration submitted successfully!");
      form.reset();
    } catch {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <main className="bg-[#F5E9D8] text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-[#F5E9D8] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/econnext-logo.jpeg" alt="logo" className="h-10" />
            <span className="font-bold text-xl">Econnext LC 2026</span>
          </div>

          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#about">About</a></li>
            <li><a href="#focus">Focus</a></li>
            <li><a href="#why">Why Attend</a></li>
            <li><a href="#nesa">NESA</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#volunteers">Volunteers</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative text-white py-40 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#2E1A73] opacity-80"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            ECONNEXT LAGOS Conference 2026
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto">
            AI • Careers • Internships • Labour Market
          </p>
          <a
            href="#register"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* ABOUT CONFERENCE */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-6">About The Conference</h2>
        <p className="text-lg leading-relaxed">
          Econnext Lagos Conference 2026 is a student-centered economic summit
          designed to address real concerns around career development,
          internship access, labour market awareness, and the role of AI in
          shaping modern industries.
        </p>
      </section>

      {/* CONFERENCE FOCUS */}
      <section id="focus" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Conference Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "AI & Digital Transformation",
              "Career Development",
              "Internship Opportunities",
              "Labour Market Education",
              "Youth Economic Leadership",
              "Industry Networking",
            ].map((item) => (
              <div key={item} className="bg-[#F5E9D8] p-6 rounded-3xl shadow-md">
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ATTEND */}
      <section id="why" className="bg-[#2E1A73] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-10">Why Attend?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-lg">
          <p>✔ Gain career clarity</p>
          <p>✔ Access internship opportunities</p>
          <p>✔ Understand AI trends</p>
          <p>✔ Network with 3,000 students</p>
          <p>✔ Learn from experts</p>
          <p>✔ Receive a certificate</p>
        </div>
      </section>

      {/* ABOUT NESA */}
      <section id="nesa" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-6">About NESA Lagos</h2>
        <p className="text-lg leading-relaxed">
          The Nigerian Economics Students Association (NESA) Lagos is the
          umbrella body representing economics students across Lagos State.
          NESA promotes academic excellence, leadership development,
          professional growth, and economic awareness among students.
        </p>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Featured Speakers
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Speaker TBA", "Speaker TBA", "Speaker TBA"].map((name) => (
            <div key={name} className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <img src="/placeholder1.jpeg" alt="speaker" className="w-32 h-32 mx-auto rounded-full mb-6 object-cover" />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-3 text-sm text-gray-600">
                Industry leader specializing in AI, economics, and workforce transformation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Organizing Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Project Head", "Media Lead", "Logistics Lead", "Partnership Lead"].map((role) => (
              <div key={role} className="text-center">
                <img src="/placeholder.jpeg" alt="team" className="w-28 h-28 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="font-bold">{role}</h3>
                <p className="text-sm text-gray-600">Full Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          Register for Econnext 2026
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-lg space-y-4">
          <input name="name" required placeholder="Full Name" className="w-full p-3 border rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <input name="course" required placeholder="Course of Study" className="w-full p-3 border rounded-xl" />
          <input name="university" required placeholder="University" className="w-full p-3 border rounded-xl" />
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg">
            Submit Registration
          </button>
        </form>
      </section>

      {/* VOLUNTEERS */}
      <section id="volunteers" className="bg-[#2E1A73] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Call for Volunteers</h2>
        <p>
          We are seeking volunteers in media, logistics, technical support,
          ushering, and partnerships. Interested volunteers should provide
          their full name, university, skillset, and availability.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Is the event free?</h3>
            <p>Yes, registration is completely free.</p>
          </div>
          <div>
            <h3 className="font-bold">Who can attend?</h3>
            <p>Open to all university students and young professionals.</p>
          </div>
          <div>
            <h3 className="font-bold">Will there be certificates?</h3>
            <p>Yes, registered attendees will receive certificates.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Contact NESA Lagos</h2>
        <p>Email: nesa.lagos@gmail.com</p>
        <p>Instagram: @nesa_lagos</p>
        <p>Twitter/X: @nesa_lagos</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2E1A73] text-white text-center py-6">
        <p>© 2026 Econnext Lagos Conference</p>
        <p className="mt-2">
          Powered by <span className="font-bold">MODE TECH</span>
        </p>
      </footer>

    </main>
  );
}
