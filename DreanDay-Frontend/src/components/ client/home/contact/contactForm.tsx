/** @format */

import RobotCheck from './robotcheck';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useChangeValue } from '../../../../hooks/InputHook';

const ContactForm = () => {
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { values, handleChange } = useChangeValue();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = values.fullName?.trim();
    const email = values.email?.trim();
    const message = values.message?.trim();

    if (!fullName || !email || !message) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);

    toast.success('Message successful sent 🎉');
  };
  return (
    <form
      action=''
      className='w-full md:w-4/8'
      onSubmit={handleLogin}
    >
      <ToastContainer />
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='text'
            name='fullName'
            value={values.fullName}
            onChange={handleChange}
            placeholder='Full names'
            className='w-full py-2 rounded-md px-4 border-2 outline-none'
          />
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            placeholder='Email'
            className='w-full py-2 rounded-md px-4 border-2 outline-none'
          />
        </div>
        <textarea
          name='message'
          value={values.message}
          onChange={handleChange}
          placeholder='Your text'
          className='rounded-md px-4 w-full h-[10vh] md:h-[16vh] border-2 outline-none'
        />
        <RobotCheck
          checked={isRobotChecked}
          onChange={setIsRobotChecked}
        />
        <button
          type='submit'
          className='py-4 px-2 bg-universal text-white rounded-md w-[200px]'
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
