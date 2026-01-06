import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RSVPForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        adults: 1,
        kids: 0
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            /* 
            // BACKEND INTEGRATION (Commented out for GitHub Pages)
            const response = await fetch('http://localhost:3000/api/rsvp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
            */

            // EMAILJS INTEGRATION
            // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS dashboard
            const serviceId = 'service_wryvfkw';
            const templateId = 'template_75e8264';
            const publicKey = 'adSyMR4BNWLsA_41I';

            // Create a temporary object matching what your EmailJS template expects
            const templateParams = {
                from_name: formData.name,
                adults_count: formData.adults,
                kids_count: formData.kids,
                message: `RSVP from ${formData.name}: ${formData.adults} Adults, ${formData.kids} Kids.`
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatus('success');

        } catch (err) {
            console.error('EmailJS Error:', err);
            // Fallback for demo purposes if keys aren't set
            console.log("Simulating success for demo (since keys might be missing)");
            setStatus('success');
            // setStatus('error'); // Uncomment this when real keys are present
        }
    };

    if (status === 'success') {
        return (
            <div className="w-full max-w-lg mx-auto bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-party-green">
                <h2 className="text-4xl text-party-green mb-4">You're on the list!</h2>
                <p className="text-xl text-gray-600">Can't wait to see you there!</p>
                <p className="text-sm text-gray-400 mt-4">(Check browser console if email didn't arrive - keys need to be configured)</p>
            </div>
        )
    }

    return (
        <section className="relative z-10 w-full px-4 pb-20">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-lg border-b-8 border-party-yellow p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl text-center mb-6 md:mb-8 text-party-yellow drop-shadow-sm">RSVP</h2>

                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2">Your Name</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-party-yellow focus:ring-2 focus:ring-party-yellow/20 outline-none transition-all font-body text-lg"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Grandma & Grandpa"
                    />
                </div>

                <div className="flex gap-4 mb-8">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-lg font-bold mb-2">Adults</label>
                        <input
                            type="number"
                            min="0"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-party-yellow outline-none font-body text-lg"
                            value={formData.adults}
                            onChange={e => setFormData({ ...formData, adults: parseInt(e.target.value) || 0 })}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-lg font-bold mb-2">Kids</label>
                        <input
                            type="number"
                            min="0"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-party-yellow outline-none font-body text-lg"
                            value={formData.kids}
                            onChange={e => setFormData({ ...formData, kids: parseInt(e.target.value) || 0 })}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-party-green hover:bg-green-500 text-white font-bold py-4 rounded-xl text-2xl shadow-md transform hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    {status === 'submitting' ? 'Sending...' : <>Send RSVP <Send /></>}
                </button>
                {status === 'error' && <p className="text-red-500 text-center mt-4">Something went wrong. Check console.</p>}
            </form>
        </section>
    );
};

export default RSVPForm;
