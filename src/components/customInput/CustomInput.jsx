import React from 'react';

const CustomInput = ({ id, type, placeholder, value, onChange, error, label, ...props }) => {
  return (
    <div className="flex flex-col  w-full">
      {label && <label htmlFor={id} className="mb-1 font-semibold text-gray-400">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:border-[#42c4e2]"
        {...props}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
};

export default CustomInput;
