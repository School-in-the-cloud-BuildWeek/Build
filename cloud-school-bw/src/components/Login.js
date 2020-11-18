import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import Logo from '../assets/Group.svg'
import { Link } from 'react-router-dom';

// Styling
const Page = styled.div`
background-color: #FFFFFF;
width:100%;
height:100vh;
display: flex;
flex-flow: column wrap;  
`

const StyledHeader = styled.h1`
font-size: 1.2rem;
color: #2A7DE1;

`;

const StyledForm = styled.form`
background-color: #FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
position: absolute;
width: 350px;
height: 200px;
border-radius: 10px;
box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
justify-content:space-between;
padding-top: 2%;
padding-bottom:2%;
`;
// const StyledUserType = styled.div`
// display:flex;
// flex-direction:row;
// font-size: 1rem;
// margin-right:42%;
// `;

const Button = styled.button`
background-color: #2A7DE1;
color: white;
width:78%;
border-radius: 100px;
border: none;
height: 26px;
`;

// const FooterText = styled.p`
// color: #BDC4C9;
// font-size:0.6rem;
// margin-left:40%;
// `;

const StyledInput = styled.input`
background-color: #F4F6F7;
color: #082E5B;
border-radius: 3px;
width: 75%;
height: 25px;
font-size: 10px;
border:none;
padding-left:3%;
`

// const Label = styled.label`
// font-size: 0.8rem;
// `
// const RadioButtons = styled.input`
// width:6px;
// height:8px;
// `

const Errors = styled.span`
color:red;
font-size:0.5rem;
text-align:left;
width:75%;
`
const ImgLogo = styled.img`
width:120px;
margin-top:2%;

`
const ImgDiv = styled.div `

`
const FormDiv = styled.div`
margin: auto auto;
width: 350px;
height: 400px;
`
// Styling



const Login = () => {

const {register, handleSubmit, setValue, errors} = useForm();

const onSubmit = (data) => {
console.log(data);
setValue("email", "");
setValue("password", "")

// data.name = data.name.trim();
// data.email = data.email.trim();
// data.password = data.password.trim();
} 

return (
<Page>
    <ImgDiv>
   <ImgLogo src = {Logo} alt = 'logo'/>
   </ImgDiv>
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
                <Link to="/sign-up" >Sign Up</Link><span>| Forgot Password</span>
                </StyledForm>
                </FormDiv>
</Page>
)
}

export default Login
