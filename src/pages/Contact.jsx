import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "", type: "" });

    try {

      setStatus({
        message: "✅ Your message has been sent. We'll get back to you soon!",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        message: "❌ Something went wrong. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="text-center py-10 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg opacity-90">We’d love to hear from you! Reach out with any questions or feedback.</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-teal-700">Get in Touch</h2>
          <p className="mb-4 text-gray-600">
            We're here to help with any inquiries or support you may need.
          </p>
          <ul className="space-y-3">
            <li><strong>Email:</strong> <a href="mailto:info@WorkBridge.com" className="text-teal-600 hover:underline">info@WorkBridge.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+254 734567890" className="text-teal-600 hover:underline">+254 73 456 7890</a></li>
            <li><strong>Address:</strong> 45 Talent Avenue, 7th Floor, Upper Hill, Nairobi, KE 00100</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-teal-700">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status.message && (
            <p
              className={`mt-4 text-center font-medium ${
                status.type === "success" ? "text-teal-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </section>

      <footer className="bg-gray-100 py-8 text-center">
        <h2 className="text-xl font-semibold mb-3 text-teal-700">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/WorkBridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-teal-600 transition"
          >
            <FaFacebook size={26} />
          </a>
          <a
            href="https://www.instagram.com/WorkBridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-teal-600 transition"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="https://www.linkedin.com/company/WorkBridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-teal-600 transition"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
