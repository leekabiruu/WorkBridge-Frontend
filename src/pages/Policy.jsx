import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import '../index.css';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      <header className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <FaShieldAlt className="text-blue-600 text-5xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">
          Learn how we collect, use, and protect your personal information.
        </p>
      </header>

      <main className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
          <p className="text-gray-600">
            This Privacy Policy explains how <span className="font-medium">WorkBridge</span> collects, uses, and protects your personal information. 
            By using our services, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information that you provide directly to us, such as your name, email address, and job preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use your information to provide and improve our services, communicate with you, 
            and ensure the security of our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Data Protection</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. 
            You can also opt out of receiving marketing communications from us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. 
            We will notify users of significant changes through our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:privacy@WorkBridge.com"
              className="text-blue-600 hover:underline"
            >
              privacy@WorkBridge.com
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
