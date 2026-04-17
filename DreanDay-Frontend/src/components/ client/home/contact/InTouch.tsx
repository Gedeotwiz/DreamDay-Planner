/** @format */

import { Phone, Locate, Timer, AtSign } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InTouchContact = () => {
  const contactArray = [
    {
      title: 'Gedeon Twizerimana',
      items: [
        {
          label: 'phone',
          value: '+250733117441',
          icon: (
            <Phone
              size={20}
              color='#3B82F6'
            />
          ),
        },
        {
          label: 'email',
          value: 'jantgedeon@gmail.com',
          icon: (
            <AtSign
              size={20}
              color='#3B82F6'
            />
          ),
        },
        {
          label: 'location',
          value: 'KG 625 St, Kigali, Nyarugenge',
          icon: <Locate color='#3B82F6' />,
        },
        {
          label: 'time',
          value: 'Open 9 AM to 5 PM',
          icon: <Timer color='#3B82F6' />,
        },
      ],
    },
    {
      title: 'Nina Iriboneye',
      items: [
        {
          label: 'phone',
          value: '+250733117441',
          icon: (
            <Phone
              size={20}
              color='#3B82F6'
            />
          ),
        },
        {
          label: 'email',
          value: 'ninairiboneye@gmail.com',
          icon: (
            <AtSign
              size={20}
              color='#3B82F6'
            />
          ),
        },
        {
          label: 'location',
          value: 'KG 625 St, Kigali, Gasabo',
          icon: <Locate color='#3B82F6' />,
        },
        {
          label: 'time',
          value: 'Open 9 AM to 5 PM',
          icon: <Timer color='#3B82F6' />,
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-full md:w-2/5'
    >
      <div className='flex flex-col gap-10 md:flex-row justify-between '>
        {contactArray.map((contact, index) => (
          <div key={index}>
            <h2 className='font-bold pb-2 md:pb-10 text-xl md:text-3xl'>{contact.title}</h2>
            <div className='flex flex-col gap-2 md:gap-5'>
              {contact.items.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 w-full'
                >
                  {item.icon}
                  <span className='text-lg md:text-xl'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='py-10 md:pt-16'>
        <h1 className='font-bold pb-2 md:pb-10 text-xl md:text-3xl'>FOLLOW US</h1>
        <div className='flex gap-4 md:gap-10'>
          <FaInstagram size={32} />
          <FaTwitter size={32} />
          <FaFacebook size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
    </motion.div>
  );
};

export default InTouchContact;
