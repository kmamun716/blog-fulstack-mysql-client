import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/shared/FormInput";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if(data.password === data.confirmPassword){
        console.log('its ok')
    }else{
        console.log('not matched')
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <FormInput
            type='text'
            register={register}
            name='name'
            placeholder='Input Your Name'
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <FormInput
            type='email'
            register={register}
            name='email'
            placeholder='Input Your Valid Email'
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <FormInput
            type='password'
            register={register}
            name='password'
            placeholder='Input Your Password'
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <FormInput
            type='password'
            register={register}
            name='confirmPassword'
            placeholder='Input Password Again'
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Mobile No</span>
          </label>
          <FormInput
            type='number'
            register={register}
            name='mobile'
            placeholder='Input Your Mobile No'
          />
        </div>
        <input className="btn btn-info my-2" type="submit" value='Register' />
      </form>
    </div>
  );
};

export default Register;
