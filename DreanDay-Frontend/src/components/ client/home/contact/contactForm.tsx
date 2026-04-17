/** @format */

import RobotCheck from './robotcheck';
import { useState } from 'react';

const ContactForm = () => {
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  return (
    <form action='' className='w-full md:w-4/8'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='text'
            placeholder='Full names'
            className='w-full py-2 rounded-md px-4 border-2 outline-none'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full py-2 rounded-md px-4 border-2 outline-none'
          />
        </div>
        <textarea
          placeholder='Your text'
          className='rounded-md px-4 w-full h-[10vh] md:h-[16vh] border-2 outline-none'
        />
        <RobotCheck
          checked={isRobotChecked}
          onChange={setIsRobotChecked}
        />
        <button className='py-4 px-2 bg-universal text-white rounded-md w-[200px]'>Submit</button>
      </div>
    </form>
  );
};
export default ContactForm;
