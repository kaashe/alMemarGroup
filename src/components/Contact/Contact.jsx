import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add multiple recipient emails
    const templateParams = {
      ...formData,
      to_email: 'support@almemargroup.com, bashir@almemargroup.com, essa@almemargroup.com', // Comma-separated emails
    };

    emailjs
      .send('service_703z7pn', 'template_h4fyqvj', templateParams, 'hNsnaOK2bPqEaAM0N')
      .then((response) => {
        console.log('SUCCESS!', response?.status, response?.text);
        setIsSent(true);
        setFormData({ from_name: '', email: '', message: '' }); // Reset the form
      })
      .catch((err) => {
        console.error('FAILED...', err);
      }).finally(() => {
        setIsLoading(false);
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
                {t("contact.heading")}
              </h1>
              <p className="text-gray-400">
                <p className="text-gray-400">{t("contact.description")}</p>
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
                <input
                  type="text"
                  name="from_name"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                  rows="4"
                />
                <button
                  type="submit"
                  className={`w-full inline-block font-semibold py-2 text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded ${isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-primary"
                    }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      {t("contact.form.sending")}
                    </span>
                  ) : (
                    t("contact.form.sendButton")
                  )}
                </button>
                {isSent && (
                  <p className="text-green-500">{t("contact.form.successMessage")}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
