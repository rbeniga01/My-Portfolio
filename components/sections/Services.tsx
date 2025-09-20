import React from 'react';
import type { Service } from '../../types';
import { SERVICES_DATA } from '../../constants';

/** Service card. */
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col h-full transition-all duration-300 hover:border-[#6049EA]/50 hover:bg-white/10 hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#6049EA] mb-4">{service.title}</h3>
            <p className="text-white/80 mb-4 flex-grow">{service.description}</p>
            <p className="text-sm text-white/60 mb-6">{service.details}</p>
            <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6049EA]">
                    {service.price}
                </span>
                <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6049EA]/80 to-purple-500/80 text-white font-semibold text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6049EA]/30">
                    Get Quote
                </a>
            </div>
        </div>
    );
};

/** Services: grid of offerings. */
const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">Services Offered</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;