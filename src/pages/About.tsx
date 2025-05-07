import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <Link to="/" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="text-4xl font-bold mb-8">About Me</motion.h1>
        
        <div className="space-y-16">
          {/* Bio Section */}
          <motion.section variants={item} className="space-y-4">
            <p className="text-lg text-white/80">
            Hi! I'm Pyarjan Thapa, a Full-Stack Developer specializing in the MERN stack. Based in Nepal, I create responsive and dynamic web applications that focus on both functionality and user experience.
            </p>
            <p className="text-lg text-white/80">
            Skilled in React.js, Node.js, MongoDB, and Express.js, I enjoy tackling complex problems and building scalable solutions. With a background in UI/UX design, I combine technical expertise with creativity to deliver clean, well-crafted applications.
            </p>
            <p className="text-lg text-white/80">
            I'm always looking to grow and take on new challenges, so feel free to connect if you’re interested in collaborating or discussing projects!
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={item}>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Development</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 px-4 py-2 rounded-lg">HTML5/CSS3</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">JavaScript</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">React.js</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Next.js</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Node.js</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">TypeScript</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">MongoDB</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">PostgreSQL</div>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Design</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 px-4 py-2 rounded-lg">UI/UX Design</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Logo Design</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Brand Identity</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Wireframing</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Figma</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Adobe XD</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Photoshop</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">Illustrator</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={item}>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Senior Web Developer & Designer</h3>
                  <span className="text-white/60">2023 - Present</span>
                </div>
                <p className="text-white/80">Leading web development projects and creating brand identities for international clients.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Freelance Designer</h3>
                  <span className="text-white/60">2022 - Present</span>
                </div>
                <p className="text-white/80">Worked with various startups on brand development and web design projects.</p>
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section variants={item}>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Bachelor in Computer Science</h3>
                  <span className="text-white/60">2022 - present</span>
                </div>
                <p className="text-white/80">Pokhara University</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Web Development & Design Certification</h3>
                  <span className="text-white/60">2022</span>
                </div>
                <p className="text-white/80">Full Stack Academy</p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};