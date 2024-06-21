import React from 'react';

function ContactForm() {
  return (
    <div className="bg-[#FFAA80] p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-[#FF5580] text-2xl mb-6 text-center">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[#FF5580]">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0080]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#FF5580]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0080]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[#FF5580]">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0080]"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FFFF80] text-[#FF5580] hover:text-[#FF0080] px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF0080]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
