import { motion } from 'framer-motion';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, built with modern technologies and best practices.',
    icon: '💻',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions on Azure, AWS, or GCP to ensure your applications run efficiently and securely.',
    icon: '☁️',
  },
  {
    title: 'AI Research & Development',
    description: 'Cutting-edge AI solutions including machine learning models, data analytics, and intelligent automation.',
    icon: '🤖',
  },
  {
    title: 'Innovation Consulting',
    description: 'Strategic consulting to help your business adopt emerging technologies and stay ahead of the competition.',
    icon: '🚀',
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-(--text-primary) text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 hover:bg-(--surface-hover) transition-colors border border-(--border) shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-(--text-primary) mb-2">{service.title}</h3>
              <p className="text-(--text-secondary)">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;