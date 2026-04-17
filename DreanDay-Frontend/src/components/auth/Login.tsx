/** @format */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GInput, GInputPassword } from './Input';
import { User } from 'lucide-react';
import { useChangeValue } from '../../hooks/InputHook';
import { GSubmitButton } from '../share/button';
import GCheckbox from './checkbox';

const LoginForm = () => {
  const { values, handleChange } = useChangeValue();
  const [remember, setRemember] = useState(false);
  return (
    <div className='bg-white w-4/5 md:w-2/7 rounded-2xl flex flex-col p-6 md:p-16 gap-16 items-center'>
      <div>
        <h1 className='text-dark font-bold text-4xl'>Login</h1>
      </div>
      <form
        action=''
        className='w-full flex flex-col gap-5'
      >
        <GInput
          name='email'
          type='email'
          placeholder='Username/Email'
          prefix={<User size={18} />}
          value={values.email || ''}
          onChange={handleChange}
        />
        <GInputPassword
          type='password'
          name='password'
          placeholder='Password'
          value={values.password || ''}
          onChange={handleChange}
        />
        <GCheckbox
          checked={remember}
          onChange={setRemember}
          label='Keep me signed in'
        />
        <GSubmitButton name='Login' />
        <p className='text-center py-5'>
          Forgot password?{' '}
          <Link
            to='/'
            className='text-universal hover:underline'
          >
            click here
          </Link>
        </p>
      </form>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-dark'>Your don't have account?</p>
        <Link
          to='/signup'
          className='text-center text-secondary'
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
