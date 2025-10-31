import React from "react";
import '../index.css';

const testimonials = [
  {
    id: 1,
    name: "Senior Frontend Developer",
    role: "Software Engineer at Microsoft",
    quote:
      "WorkBridge made my job search effortless! I found my dream job within two weeks.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "HR Manager at Google",
    quote:
      "An amazing platform! Posting jobs and finding the right talent has never been easier.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Aisha Kamau",
    role: "Product Designer at Safaricom",
    quote:
      "The user experience is top-notch. I love how simple and fast it is to connect with employers.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore our handpicked selection of top job listings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
