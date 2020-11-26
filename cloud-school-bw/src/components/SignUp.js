import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import Logo from '../assets/Group.svg'
import { Link, useHistory } from 'react-router-dom';
import '../index.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
 
// Styling
    const Page = styled.div`
        background-color: #E5E5E5;
        width:100%;
        height:100vh;
        display: flex;
        flex-flow: column wrap;   
        font-family: 'Lato', sans-serif;
        font-style: normal; 
    `
    
    const StyledHeader = styled.h1`
        font-size: 1.4rem;
        color: #2A7DE1;
    `;

    const StyledForm = styled.form`
       background-color: white;
        display:flex;
        flex-direction:column;
        align-items:center;
        position: absolute;
        width: 375px;
        height: 425px;
        border-radius: 10px;
        box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
        justify-content:space-between;
        padding-top: 1%;
        padding-bottom:1%;
    `;

    const StyledRole = styled.div`
        display:flex;
        flex-direction:row;
        font-size: 1.2rem;
        margin-right:22%;
        width:50%;
    `;

    const Button = styled.button`
        background-color: #2A7DE1;
        color: white;
        width:75%;
        border-radius: 100px;
        border: none;
        height: 26px;
    `;

    const FooterText = styled.p`
        color: #BDC4C9;
        font-size:0.8rem;
        margin-left:30%;
        margin-top:.25%;
    `;

    const StyledInput = styled.input`
        background-color: #F4F6F7;
        color: #082E5B;
        border-radius: 3px;
        width: 75%;
        height: 25px;
        font-size: 12px;
        border:none;
        padding-left:3%;
    `
    
    const Label = styled.label`
        font-size: 0.8rem;
        width:40%;
    `
    
    const RadioButtons = styled.input`
        width:8px;
        height:12px;
        margin-right:4px;
        font-size:1.2rem;
    `

    const Errors = styled.span`
        color:red;
        font-size:0.5rem;
        text-align:left;
        width:75%;
    `
    const ImgLogo = styled.img`
        width:175px;
          
    `
    const ImgDiv = styled.div `
        display:flex;
        justify-content:center;
        align-content:center;
    `
    const FormDiv = styled.div`
        margin: 2.5% auto;
        width: 375px;
        height: 425px;
    `

    const LogoDiv = styled.div`
        width: 100%;
        margin-top: 3%;
    `

// Styling




const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().notRequired(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    role: yup.string().required(),
  });

const SignUp = () => {

    const {register, handleSubmit, setValue, errors} = useForm({
        resolver: yupResolver(schema)
      });

      let history = useHistory();

    const onSubmit = (user) => {
        console.log(user)
        const {name, email, phone, password, role} = user 
        const newUser = {name, email, phone, password, role}
        console.log({newUser})
        axios.post('https://school-in-the-cloud-api.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            console.log(res.data.data[0]);
                setValue("name", "");
                setValue("email", "");
                setValue("phone", "");
                setValue("password", "")
                setValue("confirmPassword", "")
                setValue("role", "");
                history.push('/');
            })
        .catch(err => console.log(err))   
    } 
    
    return (
        <Page>
        <LogoDiv>
           <ImgDiv>
           <ImgLogo src = {Logo} alt = 'logo'/>
           </ImgDiv>
        </LogoDiv>
           <FormDiv>
               <StyledForm onSubmit = {handleSubmit(onSubmit)}>
               <StyledHeader>Sign Up</StyledHeader>
                    <StyledInput 
                        type="text"
                        name="name"
                        placeholder = 'Name'
                        ref={register({
                            required: 'Your name is required'
                        })}
                        />
                        {errors.name && <Errors>Please enter your name</Errors>}

                        <StyledInput 
                        type="email"
                        name="email"
                        placeholder = 'Email Address'
                        ref={register({
                            required: 'Your email is required'
                        })}
                        />
                        {errors.email && <Errors>Please enter your email</Errors>}

                        <StyledInput 
                        type="tel"
                        name="phone"
                        placeholder = 'Phone Number'
                        ref={register({
                            required: 'Your phone Number is required'
                        })}
                        />
                        {errors.name && <Errors>Please enter your phone number</Errors>}


                        <StyledInput 
                        type="password"
                        name="password"
                        placeholder = 'Password'
                        ref={register({
                            required: 'Password is required'
                        })}
                        />
                        {errors.password && <Errors>Please enter your password</Errors>}

                        <StyledInput 
                        type="password"
                        name="confirmPassword"
                        placeholder = 'Confirm Password'
                        ref={register({
                            required:true
                        })}
                        />
                        {errors.name && <Errors>Please confirm your password</Errors>}

                    
                        <StyledRole>
                        <Label > 
                        <RadioButtons
                        name="role" 
                        type="radio"
                        value="2"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                
                        Student </Label>

                        <Label > 
                        <RadioButtons
                        name="role" 
                        type="radio"
                        value="3"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                      
                        Volunteer </Label>
                       
                        </StyledRole>
                        {errors.role && <Errors>Are you a student or volunteer?</Errors>}
                        <Button type="submit">Sign Up</Button>
                        
                            <FooterText>Already have an account?
                                <Link className = 'login' to ="/"> Log in</Link>
                             </FooterText>
                        </StyledForm>
                        </FormDiv>
        </Page>
    )
}
export default SignUp
//test
//test
