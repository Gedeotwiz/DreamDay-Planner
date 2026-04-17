import React from "react";

type RobotCheckProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

const RobotCheck: React.FC<RobotCheckProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center justify-between border rounded-md px-4 py-3 w-[250px] md:w-[300px] shadow-sm bg-secondary">
      
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />
        <span className="text-sm text-white">I'm not a robot</span>
      </label>

      <div className="text-xs text-white text-right">
        <p>reCAPTCHA</p>
        <p className="text-[10px]">Privacy - Terms</p>
      </div>
    </div>
  );
};

export default RobotCheck;