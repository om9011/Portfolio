// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-primary p-8">
      <h2 className="text-6xl font-semibold my-10 mx-80 text-center relative bg-secondary text-tertiary py-2 skills z-10">
        Contact
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-secondary rounded-lg p-8">
          <h3 className="text-xl font-semibold text-primary mb-2">Get in Touch</h3>
          <p className="text-lg text-secondary">
            If you have any questions or inquiries, feel free to reach out to me!
          </p>
          <p className="text-lg text-secondary">Email: omgore4307@gmail.com</p>
          <p className="text-lg text-secondary">Phone: +91 86694 80758</p>
          <p className="text-lg text-secondary">Location: Pune, Maharashtra</p>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
