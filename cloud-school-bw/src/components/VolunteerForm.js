import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

//Styling

const StyledForm = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    font-size:0.6rem;
`

const FormDiv = styled.div`
    display:flex;
    justify-content:center;
    width:30%;
    height:55vh;
    align-items:center;
    background: white;
    border-radius:10px;
    margin-top:10%;
    `

const Input = styled.input`
    height: 5vh;
    margin-bottom:5%;
    background: #F4F6F7;
    border:none;
    color: #082E5B;
    padding-left:3%;
`

const Header = styled.h2`
    font-size:1rem;
    text-align:center;
    margin-bottom:14%;
`

const FormContainer = styled.div`
    display:flex;
    justify-content:center;
   
    
`

const Button = styled.button`
    height: 5vh;
    border:none;
    border-radius:17px;
    background: #2A6DE1;
    color:white;
`

const Page = styled.div`
    background-color: #E5E5E5;
    height:100vh;
    font-family: 'Lato', sans-serif;
` 

const Errors = styled.span`
color:red;
font-size:0.5rem;
text-align:left;
width:75%;
`
//Styling


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
       console.log(user)
        setValue("name", "");
        setValue("email", "");
        setValue("availability", "");
        setValue("subjects", "")
   }

    return (
        <Page>
            <FormContainer>
        <FormDiv>
        <StyledForm onSubmit = {handleSubmit(onSubmit)}>
        <Header>Volunteer Availability</Header>
                    <Input 
                    type="text"
                    name="name"
                    placeholder = 'Name'
                    ref={register({
                        required: 'Name is required'
                    })}
                    />
                    {errors.name && <Errors>Please enter your name</Errors>}

                
                    <Input 
                    type="email"
                    name="email"
                    placeholder = 'Email'
                    ref={register({
                        required: 'Password is required'
                    })}
                    />
                    {errors.email && <Errors>Please enter your email</Errors>}

                    <Input 
                    type="text"
                    name="availability"
                    placeholder = 'Schedule - Ex: Mon 9am-10am, Tues 1pm-2pm, ...'
                    ref={register({
                        required: 'Password is required'
                    })}
                    />

                    {errors.availability && <Errors>Please enter your availability</Errors>}

                    <Input 
                    type="text"
                    name="subjects"
                    placeholder = 'Subjects'
                    ref={register({
                        required: 'Subjects is required'
                    })}
                    />
                    {errors.subjects && <Errors>Please enter your subjects</Errors>}

                    <Button type="submit">Schedule</Button>
                    </StyledForm>
                </FormDiv>
        </FormContainer>
        </Page>
    )
}

export default VolunteerForm
