import React, { useState } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs?.send('service_703z7pn', 'template_h4fyqvj', formData, 'hNsnaOK2bPqEaAM0N')
      .then((response) => {
        console.log('SUCCESS!', response?.status, response?.text);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      }, (err) => {
        console.error('FAILED...', err);
      });
  };
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming Al Memar Group venture
              </h1>
              <p className="text-gray-400">
                {/* Add your description here */}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder="Services you need"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                  rows="4"
                />
                <button
                  type="submit"
                  className="w-full inline-block font-semibold py-2 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded"
                >
                  Send
                </button>
                {isSent && <p className="text-green-500">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
