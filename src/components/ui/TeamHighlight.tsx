import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: '/assets/team/member1.jpg', // Placeholder
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: '/assets/team/member2.jpg', // Placeholder
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    image: '/assets/team/member3.jpg', // Placeholder
  },
];

const TeamHighlight = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-12"
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
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                {/* Placeholder for image */}
                👤
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamHighlight;