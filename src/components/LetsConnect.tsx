import React, { useState } from 'react';
import { Mail, Phone, Clock, Github, Twitter, Linkedin, Download } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactAndResume: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Place your resume file in the `public` folder of your project
  // and update the path here.
  const resumeUrl = '/resume.pdf';

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
    // TODO: implement the message sending service
    console.log('Form submitted:', formData);
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    }) + ' IST';
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96  rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto">

        <div className="flex flex-col xl:flex-row justify-center items-start gap-8">
          
          {/* Column 1: Contact Info Card */}
          <div className="w-full xl:w-auto xl:max-w-sm bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 flex-shrink-0">
            {/* ... (Contact Info JSX is the same as before) ... */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></div>
              <span className="text-green-400 font-medium">Available for opportunities</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4"><div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"><Mail className="w-5 h-5 text-purple-400" /></div><div><p className="text-slate-400 text-sm">Email</p><a href="mailto:devgambo.work@gmail.com" className="text-white hover:text-purple-400 transition-colors font-medium">devgambo.work@gmail.com</a></div></div>
              <div className="flex items-center gap-4"><div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"><Phone className="w-5 h-5 text-purple-400" /></div><div><p className="text-slate-400 text-sm">Phone</p><a href="tel:+917619922763" className="text-white hover:text-purple-400 transition-colors font-medium">+91 7619922763</a></div></div>
              <div className="flex items-center gap-4"><div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"><Clock className="w-5 h-5 text-purple-400" /></div><div><p className="text-slate-400 text-sm">Local time</p><p className="text-white font-medium">{getCurrentTime()}</p></div></div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700"><p className="text-slate-300 mb-4 font-medium">Connect with me</p><div className="flex gap-4"><a href="https://github.com/Devgambo" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors group"><Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" /></a><a href="https://x.com/Priyyanshuu" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors group"><Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" /></a><a href="https://linkedin.com/in/devgambo" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors group"><Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" /></a></div></div>
          </div>

          {/* Column 2: Contact Form Card */}
          <div className="w-full bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8">
             <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
             {/* ... (Form JSX is the same as before) ... */}
             <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div><label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" required /></div>
                <div><label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" required /></div>
              </div>
              <div><label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hi!" rows={8} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none" required /></div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500">
                {isSubmitting ? (<div className="flex items-center justify-center gap-2"> <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><span>Sending...</span></div>) : ('Send Message')}
              </button>
            </form>
          </div>

          {/* Column 3: Compact Resume Preview Card */}
          <div className="w-full xl:w-auto xl:max-w-md bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 flex-shrink-0">
             <h3 className="text-2xl font-bold text-white mb-6">My Resume</h3>
             <div className="relative w-full h-auto aspect-[3/4] bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden">
                <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume Preview"
                    className="w-full h-full"
                    frameBorder="0"
                />
             </div>
             <a href={resumeUrl} download="My_Resume.pdf" className="mt-6 w-full inline-flex items-center justify-center gap-3 py-3 px-6 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500">
                <Download className="w-5 h-5 text-purple-400" />
                <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactAndResume;