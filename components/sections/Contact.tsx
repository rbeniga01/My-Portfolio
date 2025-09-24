import React, { useEffect, useState } from 'react';

/** Contact section with a simple form. */
const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    // Auto-hide status after 10 seconds
    useEffect(() => {
        if (!status.type) return;
        const id = setTimeout(() => {
            setStatus({ type: null, message: '' });
        }, 10000);
        return () => clearTimeout(id);
    }, [status.type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
        if (!accessKey) {
            setStatus({ type: 'error', message: 'Contact form is not configured. Missing Web3Forms access key.' });
            return;
        }

        try {
            setIsSubmitting(true);
            const form = new FormData(e.currentTarget);
            form.append('access_key', accessKey);
            form.append('Message From', 'Portfolio\'s Contact Form');
            if (!form.get('subject')) {
                form.set('subject', 'New message from portfolio contact form');
            }

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: form
            });

            const data = await res.json();
            if (data?.success) {
                setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data?.message || 'Something went wrong. Please try again later.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">Ready to Start Your Project?</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>

                <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
                    Let's discuss your next project, collaboration opportunity, or role. I'm available for new challenges and will respond to your message promptly.
                </p>

                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                    </div>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Reason for Contact" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all" />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all resize-none"></textarea>
                    {/* Honeypot field for spam bots: invisible to users, present for bots */}
                    <input
                        type="text"
                        name="botcheck"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        defaultValue=""
                    />

                    {status.type && (
                        <div
                            role="alert"
                            aria-live="polite"
                            className={`relative overflow-hidden rounded-xl border text-sm px-4 py-3 transition-all duration-300
                                ${status.type === 'success'
                                    ? 'border-green-400/20 text-green-200 bg-green-500/10'
                                    : 'border-red-400/20 text-red-200 bg-red-500/10'}`}
                        >
                            {/* Accent gradient bar */}
                            <span
                                aria-hidden
                                className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${status.type === 'success' ? 'from-green-400 to-emerald-500' : 'from-rose-400 to-red-500'}`}
                            />
                            <div className="flex items-start gap-3">
                                {/* Status dot */}
                                <span
                                    aria-hidden
                                    className={`mt-1.5 h-2.5 w-2.5 rounded-full flex-none ${status.type === 'success' ? 'bg-green-400' : 'bg-rose-400'}`}
                                />
                                <p className="leading-relaxed">{status.message}</p>
                            </div>
                        </div>
                    )}
                    <div className="text-center">
                         <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#6049EA] to-purple-500 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6049EA]/30 disabled:opacity-60 disabled:cursor-not-allowed">
                            {isSubmitting ? 'Sending…' : 'Send'}
                         </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);
};

export default Contact;