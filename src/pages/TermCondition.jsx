import React from 'react';

const TermCondition = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">1. Introduction</h2>
          <p className='text-black'>
            Welcome to Saksham Coaching Classes. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">2. Services</h2>
          <p className='text-black'>
            Saksham Coaching Classes provides various educational services, including coaching and training for different subjects and courses. Our services are subject to availability and may change from time to time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">3. User Responsibilities</h2>
          <p className='text-black'>
            As a user, you agree to use our services responsibly and in accordance with applicable laws. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">4. Payment and Refunds</h2>
          <p className='text-black'>
            Payment for our services must be made as specified on our website. Refunds, if applicable, will be processed according to our refund policy, which is available on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">5. Changes to Terms</h2>
          <p className='text-black'>
            We may update these terms and conditions from time to time. The updated terms will be posted on our website, and your continued use of our services constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">6. Contact Us</h2>
          <p className='text-black'>
            If you have any questions about these terms and conditions, please contact us at support@sakshamcoachingclasses.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermCondition;
