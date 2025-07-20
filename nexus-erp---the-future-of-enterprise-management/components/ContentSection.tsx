
import React from 'react';
import type { CardData, NewsData } from '../types';

interface CardProps {
  data: CardData;
}

const ContentCard: React.FC<CardProps> = ({ data }) => (
  <div className="group">
    <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden mb-4">
      {data.imageUrl && <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />}
    </div>
    <h3 className="text-lg font-medium text-white group-hover:text-gray-300">{data.title}</h3>
    <p className="text-sm text-gray-400 mt-1">
      <span>{data.category}</span>
      {data.date && <span className="mx-2">&middot;</span>}
      {data.date && <span>{data.date}</span>}
      {data.readTime && <span className="mx-2">&middot;</span>}
      {data.readTime && <span>{data.readTime}</span>}
    </p>
  </div>
);


interface NewsItemProps {
  data: NewsData;
}

const NewsListItem: React.FC<NewsItemProps> = ({ data }) => (
    <a href="#" className="block group py-6">
        <div className="flex items-center space-x-6">
            <div className="w-32 h-20 bg-zinc-800 rounded-md flex-shrink-0"></div>
            <div>
                <h3 className="text-lg font-medium text-white group-hover:text-gray-300">{data.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                    <span>{data.category}</span>
                    <span className="mx-2">&middot;</span>
                    <span>{data.date}</span>
                </p>
            </div>
        </div>
    </a>
);


interface ContentSectionProps {
  title: string;
  items: CardData[] | NewsData[];
  layout: 'grid' | 'list';
  gridCols?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, items, layout, gridCols = 'md:grid-cols-2 lg:grid-cols-3' }) => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">
        {title && (
            <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-medium text-white">{title}</h2>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">View all</a>
            </div>
        )}
        {layout === 'grid' ? (
          <div className={`grid grid-cols-1 ${gridCols} gap-x-8 gap-y-12`}>
            {(items as CardData[]).map((item, index) => (
              <ContentCard key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {(items as NewsData[]).map((item, index) => (
                <NewsListItem key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
