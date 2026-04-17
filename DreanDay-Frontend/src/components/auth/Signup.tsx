/** @format */

import { Link } from 'react-router-dom';
import { GInput, GInputPassword, PhoneField } from './Input';
import { User,Mail } from 'lucide-react';
import { useChangeValue } from '../../hooks/InputHook';
import { GSubmitButton } from '../share/button';

const SignupForm = () => {
  const { values, handleChange } = useChangeValue();
  return (
    <div className='bg-white w-4/5 md:w-2/7 rounded-2xl flex flex-col p-6 md:p-16 gap-16 items-center'>
      <div>
        <h1 className='text-dark font-bold text-4xl'>Register now!</h1>
      </div>
      <form
        action=''
        className='w-full flex flex-col gap-5'
      >
        <GInput
          name='firstName'
          type='text'
          placeholder='Enter first name'
          prefix={<User size={18} />}
          value={values.firstName || ''}
          onChange={handleChange}
        />
        <GInput
          name='lastName'
          type='text'
          placeholder='Enter last name'
          prefix={<User size={18} />}
          value={values.lastName || ''}
          onChange={handleChange}
        />
        <GInput
          name='email'
          type='email'
          placeholder='Username/Email'
          prefix={<Mail size={18} />}
          value={values.email || ''}
          onChange={handleChange}
        />
         <PhoneField
          value={values.phone || ''}
          onChange={(phone: string) =>
            handleChange({
              target: { name: 'phone', value: phone },
            } as any)
          }
        />
        <GInputPassword
          type='password'
          name='password'
          placeholder='Password'
          value={values.password || ''}
          onChange={handleChange}
        />
        <GSubmitButton name='Register'/>
      </form>

      <div className='flex justify-center items-center gap-3'>
        <p className='text-dark'>Have account?</p>
        <Link
          to='/login'
          className='text-center text-secondary'
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default SignupForm;
