import React, { useState } from 'react';

/** Contact section with a simple form. */
const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">Contact Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>

                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                        </div>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Reason for Contact" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all resize-none"></textarea>
                        <div className="text-center">
                             <button type="submit" className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#6049EA] to-purple-500 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6049EA]/30">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;