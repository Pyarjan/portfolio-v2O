import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { Link, useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'The Evolution of Web Development',
    excerpt: 'Exploring the journey from static HTML to modern web applications...',
    content: `Web development has come a long way from its humble beginnings. In this article, we'll explore the evolution of web technologies, from basic HTML pages to modern single-page applications.

We'll look at:
- The early days of static websites
- The rise of dynamic web applications
- Modern frameworks and their impact
- Future trends in web development

Join me as we dive deep into this fascinating journey through the history of web development.`,
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
  {
    id: 2,
    title: 'Mastering UI/UX Design',
    excerpt: 'Essential principles for creating user-friendly interfaces...',
    content: `Creating intuitive and engaging user interfaces is both an art and a science. In this comprehensive guide, we'll explore the fundamental principles of UI/UX design.

Key topics covered:
- User research and personas
- Information architecture
- Visual hierarchy
- Interaction design
- Usability testing

Learn how to create designs that not only look beautiful but also provide an excellent user experience.`,
    date: 'February 15, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  },
  {
    id: 3,
    title: 'The Power of Personal Branding',
    excerpt: 'Building your identity in the digital age...',
    content: `Personal branding has become increasingly important in today's digital landscape. This article explores how to build and maintain a strong personal brand.

We'll discuss:
- Defining your brand identity
- Creating consistent visual elements
- Building an online presence
- Networking and community engagement
- Measuring brand impact

Discover how to stand out in a crowded digital space and make a lasting impression.`,
    date: 'January 30, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg'
  }
];

export const Blogs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <Link to="/" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid gap-8">
        {blogs.map((blog) => (
          <article 
            key={blog.id} 
            className="group cursor-pointer border border-white/20 rounded-lg overflow-hidden hover:bg-white/5 transition-colors"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 aspect-video md:aspect-auto">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {blog.title}
                </h2>
                <p className="text-white/70 mb-4">{blog.excerpt}</p>
                <div className="flex gap-4 text-sm text-white/50">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};