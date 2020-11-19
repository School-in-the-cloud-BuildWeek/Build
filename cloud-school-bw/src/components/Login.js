import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import Logo from '../assets/Group.svg';
import { Link, useHistory } from 'react-router-dom';
import '../index.css'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Styling
const Page = styled.div`
background-color: #E5E5E5;
width:100%;
height:100vh;
display: flex;
flex-flow: column wrap;  
font-family: 'Lato', sans-serif;
`;

const StyledHeader = styled.h1`
font-size: 1.4rem;
color: #2A7DE1;
`;

const StyledForm = styled.form`
background-color: #FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
position: absolute;

width: 425px;
height: 275px;
border-radius: 10px;
box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
justify-content:space-between;
padding-top: 2%;
padding-bottom:2%;
`;


const Button = styled.button`
background-color: #2A7DE1;
color: white;
width:78%;
border-radius: 100px;
border: none;
height: 26px;
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
`;


const Errors = styled.span`
color:red;
font-size:0.5rem;
text-align:left;
width:75%;
`;

const ImgLogo = styled.img`
width:175px;
margin-top:5%;
`;

const ImgDiv = styled.div `
    display:flex;
    justify-content:center;
`;

const FormDiv = styled.div`
margin: 5% auto;
width: 425px;
height: 275px;
`;

const LogoDiv = styled.div`
width: 100%;
`;

const FooterDiv = styled.div`
    display:flex;
    flex-direction: row;
    margin-left:50%;
`;
// Styling



const Login = () => {

const {register, handleSubmit, setValue, errors} = useForm();


let history = useHistory();

const onSubmit = (userCredentials) => {
console.log(userCredentials);
axiosWithAuth().post('/auth/login', userCredentials)
.then(res => {
    localStorage.setItem('token', res.data.token);
    if(res.data.role === 1) {
        setValue("email", "");
        setValue("password", "");
        history.push('/admin')
    } else if (res.data.role === 3){
        setValue("email", "");
        setValue("password", "");
        history.push('/VolunteerDash')
    } else if ( res.data.role === 2){
        setValue("email", "");
        setValue("password", "");
        history.push('/StudentDash')
    }
})
.catch(err => console.log(err))
}; 


return (
<Page>
    <LogoDiv>
    <ImgDiv>
   <ImgLogo src = {Logo} alt = 'logo'/>
   </ImgDiv>
   </LogoDiv>
   <FormDiv>
       <StyledForm onSubmit = {handleSubmit(onSubmit)}>
       <StyledHeader>Log in</StyledHeader>
                <StyledInput 
                type="email"
                name="email"
                placeholder = 'Email Address'
                ref={register({
                    required: 'Email is required'
                })}
                />
                {errors.email && <Errors>Please enter your email</Errors>}

            
                <StyledInput 
                type="password"
                name="password"
                placeholder = 'Password'
                ref={register({
                    required: 'Password is required'
                })}
                />
                {errors.password && <Errors>Please enter your password</Errors>}

                <Button type="submit">Log in</Button>
                <FooterDiv>
                <Link className = 'signUp' to="/sign-up">Sign Up </Link><span className = 'signUp'>| Forgot Password</span>
                </FooterDiv>
                </StyledForm>
                </FormDiv>
</Page>
)
}

export default Login
