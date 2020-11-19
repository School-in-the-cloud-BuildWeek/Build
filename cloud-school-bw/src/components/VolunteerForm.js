import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    availability: yup.string().required(),
    subjects: yup.string().required(),
});

const VolunteerForm = () => {

    const {register, handleSubmit, setValue, errors} = useForm({
        resolver: yupResolver(schema)
      });

   const onSubmit = (user) => {
        setValue("name", "");
        setValue("email", "");
        setValue("availability", "");
        setValue("subjects", "")
   }

    return (
        <div>
       <form>
                <input 
                type="text"
                name="name"
                placeholder = 'Name'
                ref={register({
                    required: 'Name is required'
                })}
                />
                {errors.email && <span>Please enter your email</span>}

            
                <input 
                type="email"
                name="email"
                placeholder = 'Email'
                ref={register({
                    required: 'Password is required'
                })}
                />
                {errors.password && <span>Please enter your password</span>}

                <label> Availability
                <input 
                type="text"
                name="availability"
                placeholder = 'Ex: Mon 9:00am-10:00am, Tues 1:00pm-2:00pm, Wed Unavailable, ...'
                ref={register({
                    required: 'Password is required'
                })}
                />
                </label>
                {errors.password && <span>Please enter your password</span>}

                <input 
                type="text"
                name="subjects"
                placeholder = 'Subjects'
                ref={register({
                    required: 'Subjects is required'
                })}
                />
                {errors.password && <span>Please enter your password</span>}

                <button type="submit">Schedule</button>
                </form>
        </div>
    )
}

export default VolunteerForm
