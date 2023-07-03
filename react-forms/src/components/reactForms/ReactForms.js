import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


function ReactForms({ showModel, setShowModel }) {
  const handleCloseModal = () => {
    setShowModel(false);
  };

  // you can specify default values as well to your form
  // const form = useForm({
  //   defaultValues: {
  //     name: 'Name',
  //     email: '123@gmail.com'
  //   }
  // });

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const schema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email("email format is not valid..").required("email is required"),
    date: yup.date().required('Date is required')
      .min(new Date(), 'Selected date cannot be older than today'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit'
      ),
    sliderValue: yup
      .number()
      .moreThan(0, 'Slider value must be greater than 0')
      .required('Slider value is required'),
    checkbox: yup.boolean().oneOf([true], 'Checkbox must be checked').required('Checkbox is required'),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      date: Date.now(),
      sliderValue: 0
    },
    resolver: yupResolver(schema)
  });



  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    setShowModel(true);
    setTimeout(() => {
      setShowModel(false);
    }, 1500);
  }

  return (
    <ReactModal
      isOpen={showModel}
      onRequestClose={() => handleCloseModal()}
    >
      <div className='grid'>
        <button onClick={() => handleCloseModal()}><AiOutlineCloseCircle className='text-3xl float-right' /></button>
      </div>
      <form className='px-[30%] grid gap-3'>
        <div className='grid grid-cols-2'>
          <label className='' htmlFor='name'>
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className='border-2'
            {...register("name")}
          /><p className='text-red-500 col-start-2'>{errors.name?.message}</p>
        </div>
        <div className='grid grid-cols-2'>
          <label htmlFor='email'>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className='border-2'
            {...register("email", {
              validate: (fieldValue) => {
                if (fieldValue === 'pratik@gmail.com')
                  return 'Enter different email address'
                else return '';
              }

            })}
          />
          <p className='text-red-500 col-start-2'>{errors.email?.message}</p>
        </div>
        <div className='grid grid-cols-2'>
          <label htmlFor='password'>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className='border-2'
            {...register("password")}
          />
          <p className='text-red-500 col-start-2'>{errors.password?.message}</p>
        </div>

        <div className='grid grid-cols-2'>
          <label htmlFor='date'>
            Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className='border-2'
            {...register("date", {
              required: 'please select date'
            })}
          />
          <p className='text-red-500 col-start-2'>{errors.date?.message}</p>
        </div>
        <div className='grid grid-cols-2'>
          <label htmlFor='sliderValue'>
            Slider:
          </label>
          <input
            type="range"
            name="sliderValue"
            id="slider"
            min="0"
            max="100"
            className='border-2'
            {...register("sliderValue", {
              required: 'slide this slider for going forward'
            })}
          />
          <p className='text-red-500 col-start-2'>{errors.sliderValue?.message}</p>
        </div>
        <div className='grid grid-cols-2'>
          <label htmlFor='checkbox'>
            Checkbox:
          </label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className='border-2'
            {...register("checkbox", {
              required: 'please check this check box'
            })}
          />
          <p className='text-red-500 col-start-2'>{errors.checkbox?.message}</p>
        </div>
        <div className='grid grid-cols-4'>
          <label htmlFor='radioButton1'>
            Radio Button 1:
          </label>
          <input
            type="radio"
            name="radioButton1"
            id="radioButton1"
            className='border-2'
            {...register("radioButton1", {
              required: 'please check this radio button for going forward.'
            })}
          />
          <label htmlFor='radioBotton2'>
            Radio Button 2:
          </label>
          <input
            type="radio"
            name="radioButton2"
            id="radioButton2"
            className='border-2'
            {...register("radioButton2")}
          />
        </div>

        <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-slate-600 text-white">Submit</button>

      </form>
      {showSuccessMsg ? <p className='text-center text-green-700 text-3xl'>Form Submitted sucessfully...... Please close the popup</p> : ''}

    </ReactModal>
  );
}

export default ReactForms;
