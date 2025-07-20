import React, { useState, useEffect, useRef } from 'react';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import CtaSection from './components/CtaSection';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ArrowUpIcon } from './components/IconComponents';
import type { CardData, NewsData } from './types';


const Hero = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <section className="text-center pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">What can I help with?</h1>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Explica por qué el maíz palomitas explota"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl text-white text-lg p-5 pr-20 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                if (!target.value) {
                    target.style.height = 'auto';
                    target.rows = 1;
                } else {
                    target.rows = 1;
                    target.style.height = 'auto';
                    target.style.height = `${target.scrollHeight}px`;
                }
              }}
            />
            <button className="absolute right-4 bottom-4 w-10 h-10 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center text-white transition-colors">
              <ArrowUpIcon />
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['Search with ChatGPT', 'Talk with ChatGPT', 'Research', 'Sora', 'More'].map(item => (
              <button key={item} className="py-2 px-4 border border-zinc-700 bg-black hover:bg-zinc-800 rounded-full text-sm text-gray-300 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NotificationBanner = () => (
  <div className="bg-zinc-900 rounded-lg">
    <div className="max-w-screen-xl mx-auto py-4 px-6 sm:px-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex-1 flex items-center min-w-[200px]">
          <span className="text-sm font-semibold text-white bg-zinc-700 rounded-full px-3 py-1 mr-4">New</span>
          <p className="font-medium text-white">
            <span className="md:hidden">Updates to business plans.</span>
            <span className="hidden md:inline">
              Updates to ChatGPT business plans including connectors to internal tools, enhanced security controls, and flexible pricing.
            </span>
          </p>
        </div>
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center justify-center py-2 px-5 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm font-semibold text-white transition-colors">
            See plans
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Sample Data
const productUpdates: CardData[] = [
  { imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23114abd69?q=80&w=800&auto=format&fit=crop', title: 'A letter from Sam & Jony', category: 'Company', readTime: '3 min read' },
  { imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', title: 'Introducing Codex', category: 'Release', readTime: '12 min read' },
  { imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop', title: 'Building a custom math tutor powered by ChatGPT', category: 'ChatGPT', readTime: '4 min read' },
];

const latestNews: NewsData[] = [
    { title: 'Preparing for future AI risks in biology', category: 'Safety', date: 'Jun 18, 2025' },
    { title: 'Bringing the Magic of AI to Mattel’s Iconic Brands', category: 'Company', date: 'Jun 12, 2025' },
    { title: 'Scaling security with responsible disclosure', category: 'Security', date: 'Jun 9, 2025' },
    { title: 'How we’re responding to The New York Times’ data demands', category: 'Security', date: 'Jun 5, 2025' },
    { title: 'OpenAI Deutschland', category: 'Company', date: 'May 22, 2025' },
];

const stories: CardData[] = [
    { imageUrl: 'https://images.unsplash.com/photo-1518133269793-38c2141561b3?q=80&w=800&auto=format&fit=crop', title: 'Lyndon Barrois & Sora', category: 'Sora', date: 'Dec 4, 2024', readTime: '3 min read' },
    { imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop', title: 'Creating nail art with ChatGPT', category: 'ChatGPT', date: 'Feb 4, 2025', readTime: '4 min read' },
    { imageUrl: 'https://images.unsplash.com/photo-1532187643623-dbf2f5a73b13?q=80&w=800&auto=format&fit=crop', title: 'Economics and reasoning with OpenAI o1', category: 'ChatGPT', date: 'Sep 13, 2024', readTime: '2 min read' },
];

const research: CardData[] = [
    { title: 'Toward understanding and preventing misalignment generalization', category: 'Publication', date: 'Jun 18, 2025' },
    { title: 'Introducing HealthBench', category: 'Publication', date: 'May 12, 2025' },
];

const forBusiness: CardData[] = [
    { title: 'Invideo AI uses OpenAI models to create videos 10x faster', category: 'API' },
    { title: 'No-code personal agents, powered by GPT-4.1 and Realtime API', category: 'API' },
    { title: 'Customizable, no-code voice agent automation with GPT-4o', category: 'API' },
];


const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentEl = mainContentRef.current;
      if (!contentEl) return;
      
      const currentScrollY = contentEl.scrollTop;

      // Hide header when scrolling down past 200px, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const contentEl = mainContentRef.current;
    contentEl?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      contentEl?.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="flex bg-black text-gray-200 h-screen font-sans">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <Header isVisible={isHeaderVisible} onMobileMenuClick={() => setIsMobileMenuOpen(true)} />
      
      <div ref={mainContentRef} className="flex-1 w-full flex flex-col overflow-y-auto">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <main className="pt-20">
            <Hero />
            <NotificationBanner />

            <div className="my-16">
                <div className="relative overflow-hidden rounded-lg">
                    <div className="aspect-[1.8/1] bg-zinc-800">
                        <img src="https://images.unsplash.com/photo-1698287753558-b689253554a6?q=80&w=2070&auto=format&fit=crop" alt="Abstract blue and purple shapes" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl font-semibold">Introducing ChatGPT agent</h2>
                    <p className="text-gray-400 mt-2">Product · 11 min read</p>
                </div>
            </div>

            <div className="-mt-8">
              <ContentSection title="" items={productUpdates} layout="grid" gridCols="md:grid-cols-3" />
            </div>

            <ContentSection title="Latest news" items={latestNews} layout="list" />
            <ContentSection title="Stories" items={stories} layout="grid" gridCols="md:grid-cols-3" />
            <ContentSection title="Latest research" items={research} layout="grid" gridCols="md:grid-cols-2" />
            <ContentSection title="OpenAI for business" items={forBusiness} layout="grid" gridCols="md:grid-cols-3" />
            <CtaSection />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
