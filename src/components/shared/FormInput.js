import React from 'react';

const FormInput = ({type, register, name, placeholder}) => {
    return (
        <div>
            <input 
                type={type}
                className="input input-bordered w-full max-w-xs"
                placeholder={placeholder}
                {...register(`${name}`, { required: true })} 
            />
        </div>
    );
};

export default FormInput;