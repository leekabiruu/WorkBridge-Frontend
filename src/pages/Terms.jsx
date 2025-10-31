import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import '../index.css';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      <header className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <FaRegFileAlt className="text-blue-600 text-5xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Terms of Service</h1>
        <p className="text-gray-500 mt-2">
          Please read our terms carefully before using our services.
        </p>
      </header>

      <main className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to <span className="font-medium">WorkBridge</span>. These Terms of Service govern your use 
            of our website and services. By using our services, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. User Responsibilities</h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your account and password. 
            You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Service Availability</h2>
          <p className="text-gray-600">
            We strive to provide uninterrupted service. However, we do not guarantee that our 
            services will always be available or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not liable for any indirect, incidental, or consequential damages arising from 
            the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these Terms of Service at any time. 
            We will notify users of significant changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a
              href="mailto:support@WorkBridge.com"
              className="text-blue-600 hover:underline"
            >
              support@WorkBridge.com
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
