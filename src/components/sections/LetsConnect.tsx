import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  { icon: FaGithub, href: "https://Github.com/Devgambo", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/devgambo/", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/Priyyanshuu", label: "X" },
  { icon: FaInstagram, href: "https://www.instagram.com/priyyyansshu/", label: "Instagram" },
  { icon: CiMail, href: "mailto:devgambo.work@gmail.com", label: "Email" }
];

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  }) + ' IST';
};

const LetsConnect: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: data.message || 'Message sent successfully!',
      });
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-8 md:py-12 px-4 pb-8 md:pb-12">
      {/* Signature at corner */}
      <p className='font-monsieurladoulaise text-3xl md:text-6xl text-pink-900 absolute bottom-0 right-4 md:right-10 rotate-[-30deg] opacity-100 pointer-events-none z-0'>Priyanshu</p>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

          {/* Left Column: Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Availability Badge */}
            <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-green-400 font-audiowide text-xs md:text-sm">Available for opportunities</span>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 md:space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300 group">
                <div className="p-2 md:p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-pink-500/50 transition-colors text-pink-500">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-xs font-audiowide mb-1">Email</p>
                  <a
                    href="mailto:devgambo.work@gmail.com"
                    className="text-white hover:text-pink-400 transition-colors font-audiowide text-xs md:text-sm lg:text-base break-all"
                  >
                    devgambo.work@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300 group">
                <div className="p-2 md:p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-pink-500/50 transition-colors text-purple-500">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-xs font-audiowide mb-1">Phone</p>
                  <a
                    href="tel:+917619922763"
                    className="text-white hover:text-pink-400 transition-colors font-audiowide text-xs md:text-sm lg:text-base"
                  >
                    +91 7619922763
                  </a>
                </div>
              </div>

              {/* Local Time */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300 group">
                <div className="p-2 md:p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-pink-500/50 transition-colors text-pink-400">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-xs font-audiowide mb-1">Local time</p>
                  <p className="text-white font-audiowide text-xs md:text-sm lg:text-base">{currentTime}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 md:p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
              <h3 className="text-xs md:text-sm font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
                Connect with me
              </h3>
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 rounded-xl bg-black/40 border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-pink-500/50 shadow-lg backdrop-blur-sm"
                      aria-label={link.label}
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="backdrop-blur-md rounded-xl border border-white/20 p-4 md:p-6 lg:p-8 shadow-2xl bg-black/20">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Send a message
              </h3>
              <p className="text-white/60 font-audiowide text-xs md:text-sm">
                Have a project in mind? Let&apos;s talk about it!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-3 md:p-4 rounded-lg border ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50 text-green-400'
                      : 'bg-red-500/10 border-red-500/50 text-red-400'
                  } font-audiowide text-xs md:text-sm`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-xs md:text-sm font-audiowide mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all backdrop-blur-sm font-audiowide text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-xs md:text-sm font-audiowide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all backdrop-blur-sm font-audiowide text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-xs md:text-sm font-audiowide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none backdrop-blur-sm font-audiowide text-sm md:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 md:py-3 px-4 md:px-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-pink-500 font-audiowide flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;