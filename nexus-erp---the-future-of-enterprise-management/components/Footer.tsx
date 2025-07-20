
import React from 'react';
import { NexusLogo, TwitterIcon, YoutubeIcon, LinkedInIcon } from './IconComponents';

const footerLinks = {
  'Solutions': ['By Industry', 'By Business Size', 'Finance', 'Supply Chain', 'Human Resources', 'CRM'],
  'Products': ['Nexus Core', 'Nexus Analytics', 'Nexus Flow AI', 'Platform Overview', 'Pricing'],
  'Resources': ['Customer Stories', 'Blog', 'Whitepapers', 'Webinars', 'Documentation', 'Developer API'],
  'Company': ['About Us', 'Careers', 'Newsroom', 'Our Values', 'Contact Us'],
  'Legal': ['Terms & Policies', 'Privacy Policy', 'Security', 'Trust Center'],
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <NexusLogo />
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">YouTube</span><YoutubeIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><LinkedInIcon /></a>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Nexus ERP Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Manage Cookies</a>
            <button className="flex items-center space-x-2 hover:text-white">
              <span>English - United States</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
