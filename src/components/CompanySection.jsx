import React from 'react'
import '../index.css';

function CompanySection() {
  const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ]

  return (
    <section className="bg-white py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Top Hiring Companies
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {companies.map((company, i) => (
          <img
            key={i}
            src={company.logo}
            alt={company.name}
            className="h-10 grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  )
}

export default CompanySection
