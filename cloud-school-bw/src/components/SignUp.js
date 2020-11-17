import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import Logo from '../assets/Group.svg'

// Styling
    const Page = styled.div`
        background-color: #F4F4F4;
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
       background-color: white;
        display:flex;
        flex-direction:column;
        align-items:center;
        position: absolute;
        width: 350px;
        height: 400px;
        border-radius: 10px;
        box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
        justify-content:space-between;
        padding-top: 2%;
        padding-bottom:2%;
    `;
    const StyledUserType = styled.div`
        display:flex;
        flex-direction:row;
        font-size: 1rem;
        margin-right:42%;
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
        font-size:0.6rem;
        margin-left:40%;
    `;

    const StyledInput = styled.input`
        background-color: #F4F6F7;
        color: #082E5B;
        border-radius: 3px;
        width: 75%;
        height: 25px;
        font-size: 10px;
        border:none;
    `

    const Label = styled.label`
        font-size: 0.8rem;
    `
    const RadioButtons = styled.input`
        width:6px;
        height:8px;
    `

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



const SignUp = () => {

    const {register, handleSubmit, setValue, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setValue("name", "");
        setValue("email", "");
        setValue("phoneNumber", "");
        setValue("password", "")
        setValue("confirmPassword", "");
        setValue("userType", "");
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
               <StyledHeader>Sign Up</StyledHeader>
                    <StyledInput 
                        type="text"
                        name="name"
                        placeholder = 'Name'
                        ref={register({
                            required: 'Name is required'
                        })}
                        />
                        {errors.name && <Errors>Please enter your name</Errors>}

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
                        type="tel"
                        name="phoneNumber"
                        placeholder = 'Phone Number'
                        ref={register({
                            required: 'Phone Number is required'
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
                            required: 'Confirm Password'
                        })}
                        />
                        {errors.name && <Errors>Please confirm your password</Errors>}

                    
                        <StyledUserType>
                        <Label> 
                        <RadioButtons
                        name="userType" 
                        type="radio"
                        value="student"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                
                        Student </Label>

                        <Label> 
                        <RadioButtons
                        name="userType" 
                        type="radio"
                        value="volunteer"
                         ref={register({
                            required: 'Please choose student or volunteer' })}
                            />
                      
                        Volunteer </Label>
                       
                        </StyledUserType>
                        {errors.userType && <Errors>Are you a student or volunteer?</Errors>}
                        <Button type="submit">Sign Up</Button>
                        <FooterText>Already have an account? <a href = '#'>Login</a></FooterText>
                        </StyledForm>
                        </FormDiv>
        </Page>
    )
}

export default SignUp
