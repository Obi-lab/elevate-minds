"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';

const NewsletterSubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    // Reset the form after submission
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center text-white  py-2 w-[100%] bg-red-600">
      
      <form onSubmit={handleSubmit} className="w-[100%] flex flex-row p-16  justify-between">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <div className="mb-4">
        
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email address"
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscriptionForm;
