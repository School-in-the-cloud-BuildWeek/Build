import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';

// Styling
    const StyledBackground = styled.div`
        background-color: #E5E5E5;
        width:100%;
        height:100vh;
        display: flex;
        justify-content:center;
        align-items: center;
    `;

    const StyledHeader = styled.h1`
        font-size: 1.2rem;
    `;

    const StyledForm = styled.form`
        background-color: #FFFFFF;
        display:flex;
        flex-direction:column;
        align-items:center;
        position: absolute;
        width: 400px;
        height: 250px;
        border-radius: 10px;
        box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
        justify-content:space-between;
        padding: 5% 0;
    `;
    const StyledUserType = styled.div`
    display:flex;
    flex-direction:row;
    `;

    // const StyledSection = styled.div`
   
    // `;
// Styling



const SignUp = () => {

    const {register, handleSubmit, setValue, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setValue("name", "");
        setValue("email", "");
        setValue("password", "");
        setValue("userType", "");
        data.name = data.name.trim();
        data.email = data.email.trim();
        data.password = data.password.trim();
    }

    return (
        <StyledBackground>
           {/* <img src = 'front-end/cloud-school-bw/src/assets/logo.png' alt = 'logo'/> */}
                {/* <StyledSection> */}
               <StyledForm onSubmit = {handleSubmit(onSubmit)}>
               <StyledHeader>Sign Up</StyledHeader>
                    <input 
                        type="text"
                        name="name"
                        placeholder = 'Name'
                        ref={register({
                            required: 'Name is required'
                        })}
                        />
                        {errors.name && <p>Error in name</p>}

                        <input 
                        type="email"
                        name="email"
                        placeholder = 'Email Address'
                        ref={register({
                            required: 'Email is required'
                        })}
                        />
                        {errors.email && <p>Error in email</p>}

                        <input 
                        type="password;"
                        name="password"
                        placeholder = 'Password'
                        ref={register({
                            required: 'Password is required'
                        })}
                        />
                        {errors.password && <p>Error in Password</p>}
                    
                        {/* FIX STUDENT OR VOLUNTEER BUG */}
                        <StyledUserType>
                        <label> 
                        <input 
                        name="userType" 
                        type="radio"
                        value="student"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                
                        Student </label>

                        <label> 
                        <input 
                        name="userType" 
                        type="radio"
                        value="volunteer"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                      
                        Volunteer </label>
                       
                        </StyledUserType>
                        {/* FIX STUDENT OR VOLUNTEER BUG */}
                        <button type="submit">Sign Up</button>
                        {errors.userType && <p>Error! Are you a student or volunteer?</p>}
                        </StyledForm>
                        {/* </StyledSection> */}
        </StyledBackground>
    )
}

export default SignUp
