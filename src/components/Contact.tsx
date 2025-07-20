import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Loader } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_2d2ihwd';
const TEMPLATE_ID = 'template_cpn5owj';
const PUBLIC_KEY = 'FyNvxxCCrlIvL1-3i';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail />, label: 'Email', value: 'shreya.phalke24@vit.edu', link: 'mailto:shreya.phalke24@vit.edu' },
    { icon: <Phone />, label: 'Phone', value: 'Available on request', link: null },
    { icon: <MapPin />, label: 'Location', value: 'Pune, Maharashtra, India', link: null },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss opportunities and collaborate on exciting projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg text-teal-600 dark:text-teal-400">{info.icon}</div>
                <div>
                  <p className="text-sm uppercase text-gray-500 dark:text-gray-400">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">{info.value}</a>
                  ) : (
                    <p className="text-gray-900 dark:text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <a href="https://github.com/SHREYAPHALKE26" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-700 dark:text-white hover:text-teal-500" />
              </a>
              <a href="https://www.linkedin.com/in/shreyaphalke/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 hover:text-blue-500" />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h3>

            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                <CheckCircle className="inline mr-2" /> Message sent successfully!
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleInputChange} className="w-full p-3 rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />

              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} className="w-full p-3 rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />

              <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleInputChange} className="w-full p-3 rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />

              <textarea name="message" placeholder="Message" required rows={5} value={formData.message} onChange={handleInputChange} className="w-full p-3 rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 rounded hover:from-teal-600 hover:to-blue-600 transition">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="h-5 w-5 animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" /> Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
