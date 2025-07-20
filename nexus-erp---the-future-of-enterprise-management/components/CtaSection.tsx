
import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-semibold text-white">Get started with Nexus ERP</h2>
          <p className="mt-4 text-lg text-gray-300">
            Transform your business operations with our unified, intelligent ERP platform.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-gray-100 text-black hover:bg-white transition-colors rounded-md py-3 px-6 text-base font-semibold">
              Request a Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
