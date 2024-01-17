import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Registration() {
  const [state, setState] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setState(true)
  };

  return (
    <div>
      <Link to="/">
        <img src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png' alt="" className=' p-3  cursor-pointer' />
      </Link>
      <h1 className='text-center	font-bold	text-5xl text-red-600 mb-20'>Registration Form</h1>
      <div className='flex justify-center items-center '>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-8 rounded shadow-md text-center">
          {state && <h1 className='mb-20 text-center font-bold bg-blue-400 text-white'>Registration successfull!</h1>}
          <h1 className='mb-20 text-center font-bold'>Please Enter your details</h1>
          <div className='mb-20'>
            <input
              {...register('firstname', { required: 'Please Enter your name', minLength: 3, maxLength: 30 })}
              placeholder='Your Name'
              className='border bg-gray-300 h-8 w-56 p-2'
            />
            {errors.firstname && <p className='text-red-500'>{errors.firstname.message}</p>}
            {errors.firstname && errors.firstname.type == 'minLength' && <p className='text-red-500'>Should have minimum 3 letters </p>}
            {errors.firstname && errors.firstname.type == 'maxLength' && <p className='text-red-500'>Can have maximum 30 letters </p>}
          </div>
          <div className='mb-20'>
            <input
              {...register('email', { required: 'Please Enter your email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
              placeholder='Your E-mail'
              className='border bg-gray-300 h-8 w-56 p-2'
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            {errors.email && errors.email.type == 'pattern' && <p className='text-red-500'>Please Enter a valid email</p>}
          </div>
          <div className='mb-20'>
            <input
              {...register('password', { required: 'Please enter your password', minLength: 10, pattern: /[^a-zA-Z0-9]/g })}
              placeholder='Password'
              type='password'
              className='border bg-gray-300 h-8 w-56 p-2'
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            {errors.password && errors.password.type == 'minLength' && <p className='text-red-500'>Password must contain 10 characters</p>}
            {errors.password && errors.password.type == 'pattern' && <p className='text-red-500'>Password must contain a Speacial character</p>}
          </div>
          <div className='mb-20'>
            <input
              {...register('confirmPass', { required: 'Please confirm your password', validate: (value) => value === getValues('password') || 'Passwords do not match' })}
              placeholder='Confirm Password'
              type='password'
              className='border bg-gray-300 h-8 w-56 p-2'
            />
            {errors.confirmPass && <p className="text-red-500">{errors.confirmPass.message}</p>}
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='p-2 pl-10 pr-10 border rounded-md bg-red-600 text-white hover:bg-white hover:text-red-600 hover:font-bold hover:border-red-600'>Submit</button>
          </div>
        </form>
      </div>
      <Link to='/'>
        <button className='p-2 pl-10 pr-10 border rounded-md bg-red-600 text-white hover:bg-white hover:text-red-600 hover:font-bold hover:border-red-600 absolute right-10'>Go Home</button>
      </Link>
    </div>
  );
}

export default Registration;
