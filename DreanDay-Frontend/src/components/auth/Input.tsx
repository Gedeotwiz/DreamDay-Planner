
import { Eye, EyeOff, Lock } from "lucide-react";
import React, { useState } from "react";




interface IProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: React.ReactNode;
  name: string; 
}

const GInput = ({ type, value, placeholder, onChange, prefix,name }: IProps) => {
  return (
    <div className="relative w-full">
      
      
      {prefix && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          {prefix}
        </div>
      )}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-[#eeee] pl-14 pr-3 py-4 border-0 rounded-3xl outline-none"
      />
    </div>
  );
};

const GInputPassword = ({ type, value, placeholder, onChange, prefix, name }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative w-full">

     
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        {isPassword ? <Lock size={18} /> : prefix}
      </div>

    
      <input
        name={name}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-[#eeee] pl-14 pr-14 py-4 border-0 rounded-3xl outline-none"
      />

      {isPassword && (
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )}
    </div>
  );
};

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const PhoneField = ({ value, onChange }: any) => {
  return (
    <div className="flex items-center w-full rounded-3xl bg-[#eeee] px-6 py-3">
      <PhoneInput
        international
        defaultCountry="RW"
        value={value}
        onChange={onChange}
        className="w-full border-0 rounded-3xl outline-none"
      />
    </div>
  );
};

export {GInputPassword,GInput,PhoneField } 
