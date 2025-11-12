import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: '/assets/team/member1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: '/assets/team/member2.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    image: '/assets/team/member3.jpg',
  },
];

const TeamHighlight = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-(--text-primary) text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-(--surface-hover) transition-colors border border-(--border) shadow-lg hover:shadow-xl"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-(--text-secondary) rounded-full flex items-center justify-center text-2xl">
                {/* Placeholder for image */}
                👤
              </div>
              <h3 className="text-xl font-semibold text-(--text-primary) mb-1">{member.name}</h3>
              <p className="text-(--text-secondary)">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamHighlight;