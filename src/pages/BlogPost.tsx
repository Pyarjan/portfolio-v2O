import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';

// This would typically come from an API or database
const blogs = [
  {
    id: 1,
    title: 'The Evolution of Web Development',
    content: `Web development has come a long way from its humble beginnings. In this article, we'll explore the evolution of web technologies, from basic HTML pages to modern single-page applications.

We'll look at:
- The early days of static websites
- The rise of dynamic web applications
- Modern frameworks and their impact
- Future trends in web development

The web development landscape has undergone significant transformations since its inception. What started as simple static HTML pages has evolved into complex, interactive applications that power our daily lives.

Early Days of Static Websites
In the beginning, websites were simple collections of static HTML pages. Developers wrote HTML by hand, and pages were connected through basic hyperlinks. CSS wasn't yet available, so styling was done inline or with basic HTML attributes.

The Rise of Dynamic Web Applications
As the web matured, developers needed ways to create more interactive experiences. This led to the development of server-side technologies like PHP, ASP, and later Ruby on Rails. These technologies allowed websites to generate content dynamically based on user input and database content.

Modern Frameworks and Their Impact
Today's web development landscape is dominated by JavaScript frameworks like React, Vue, and Angular. These frameworks have revolutionized how we build web applications by introducing concepts like:

- Component-based architecture
- Virtual DOM
- State management
- Client-side routing

These innovations have made it possible to create more sophisticated, responsive, and maintainable web applications.

Future Trends in Web Development
Looking ahead, several exciting trends are shaping the future of web development:

1. WebAssembly (Wasm)
2. Edge Computing
3. AI-powered Development Tools
4. Progressive Web Apps (PWAs)
5. Serverless Architecture

Join me as we dive deep into this fascinating journey through the history of web development.`,
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    author: 'Pyarjan Thapa'
  },
  {
    id: 2,
    title: 'Mastering UI/UX Design',
    content: `Creating intuitive and engaging user interfaces is both an art and a science. In this comprehensive guide, we'll explore the fundamental principles of UI/UX design.

Key topics covered:
- User research and personas
- Information architecture
- Visual hierarchy
- Interaction design
- Usability testing

User Research and Personas
Understanding your users is the foundation of good design. Through user research, we can:
- Identify user needs and pain points
- Create detailed user personas
- Map user journeys
- Validate design decisions

Information Architecture
A well-structured information architecture ensures users can find what they need easily:
- Content organization
- Navigation design
- User flow mapping
- Taxonomy development

Visual Hierarchy
Effective visual hierarchy guides users through your interface:
- Typography scale
- Color theory
- Space and layout
- Contrast and emphasis

Interaction Design
Good interaction design creates intuitive experiences:
- Micro-interactions
- Animation and transitions
- Feedback mechanisms
- Error handling

Usability Testing
Regular testing ensures your designs work for real users:
- User testing sessions
- A/B testing
- Analytics tracking
- Iterative improvements

Learn how to create designs that not only look beautiful but also provide an excellent user experience.`,
    date: 'February 15, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    author: 'Pyarjan Thapa'
  },
  {
    id: 3,
    title: 'The Power of Personal Branding',
    content: `Personal branding has become increasingly important in today's digital landscape. This article explores how to build and maintain a strong personal brand.

We'll discuss:
- Defining your brand identity
- Creating consistent visual elements
- Building an online presence
- Networking and community engagement
- Measuring brand impact

Defining Your Brand Identity
Your brand identity is more than just a logo or color scheme. It's about:
- Your unique value proposition
- Core values and beliefs
- Target audience
- Brand voice and personality

Creating Consistent Visual Elements
Visual consistency strengthens brand recognition:
- Logo design and usage
- Color palette
- Typography system
- Image style guide

Building an Online Presence
A strong online presence is crucial in today's digital world:
- Website development
- Social media strategy
- Content creation
- SEO optimization

Networking and Community Engagement
Building relationships is key to brand growth:
- Industry events
- Online communities
- Collaboration opportunities
- Mentorship programs

Measuring Brand Impact
Track your brand's success through:
- Social media metrics
- Website analytics
- Engagement rates
- Brand sentiment

Discover how to stand out in a crowded digital space and make a lasting impression.`,
    date: 'January 30, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg',
    author: 'Pyarjan Thapa'
  }
];

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <HeaderNav />
        <div className="max-w-3xl mx-auto">
          <Link to="/blogs" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
            ← Back to Blogs
          </Link>
          <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <article className="max-w-3xl mx-auto">
        <Link to="/blogs" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
          ← Back to Blogs
        </Link>
        
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full aspect-video object-cover rounded-lg mb-8"
        />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-white/60">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>
        
        <div className="prose prose-invert prose-lg max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-white/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};