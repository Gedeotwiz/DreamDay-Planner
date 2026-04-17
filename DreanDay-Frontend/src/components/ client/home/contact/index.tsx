/** @format */

import ContactForm from './contactForm';
import InTouchContact from './InTouch';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="bg-[url('/back-auth-login.png')] bg-cover py-10 bg-center px-10 md:p-24">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='flex flex-col gap-5'
      >
        <h1 className='text-secondary text-3xl md:text-6xl font-bold'>Drop us a line</h1>
        <p className='flex items-center gap-2 w-[350px] md:w-full'>
          <hr className='border-t border-gray-300 w-10' />
          We would like to hear from you. what is your bold idea?
        </p>
      </motion.div>
      <div className='py-10 md:py-16 flex flex-col md:flex-row justify-between'>
        <InTouchContact />
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactUs;
