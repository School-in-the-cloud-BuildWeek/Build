import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import '../index.css';
import axios from 'axios';

const TrainingContainer = styled.div`

#training-form {
    display: none;
    position: absolute;
    width: 640px;
    height: 360px;
    left: 400px;
    top: 333px;
    z-index: 9;

    background: #FAFAFB;
    box-shadow: 0px 30px 60px -40px rgba(8, 46, 91, 0.49);
    border-radius: 10px;    
}`

const Form = styled.form` 
    position: absolute;
    width: 640px;
    height: 360px;
    left: 400px;
    top: 333px;

    background: #FAFAFB;
    box-shadow: 0px 30px 60px -40px rgba(8, 46, 91, 0.49);
    border-radius: 10px;    
`

const TrainingTitle = styled.h3` 
    position: absolute;
    width: 145px;
    height: 24px;
    left: 430px;
    top: 353px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 24px;  

    letter-spacing: 3px;
    text-transform: uppercase;

    color: #25476E;
` 

const CourseInput = styled.input`
    position: absolute;
    left: 29.86%;
    right: 30.07%;
    top: 38.77%;
    bottom: 56.35%;

    background: #F4F6F7;
    border-radius: 3px;
`

const NotesInput = styled.input`
    position: absolute;
    left: 29.86%;
    right: 30.07%;
    top: 45.61%;
    bottom: 41.99%;

    background: #F4F6F7;
    border-radius: 3px;
`
const ConfirmButton = styled.button`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #2A7DE1;
    border-radius: 100px;
`

const ButtonText = styled.p`
position: absolute;
height: 22px;
left: 25px;
right: 25px;
top: calc(50% - 22px/2 + 0.5px);

font-family: Fira Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;

text-align: center;
color: #FFFFFF;
`

const Errors = styled.span`
        color:red;
        font-size:0.5rem;
        text-align:left;
        width:75%;
    `
    

export default function TrainingForm() {

    const {register, handleSubmit, setValue, errors} = useForm()

    const onSubmit = (training) => {
        setValue("course", "");
        setValue("notes", "");

        axios.post('https://school-in-the-cloud-api.herokuapp.com/api/trainings', training)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    } 
    
    
    
    return(
        <TrainingContainer>
        <div id='training-form'>
            <Form onSubmit = {handleSubmit(onSubmit)}>
                <TrainingTitle>Create a Training</TrainingTitle>
                <CourseInput
                    type='text'
                    name='course'
                    placeholder='Courses'
                    ref={register({
                        required: 'Course name is required'
                    })}
                    />
                    {errors.course && <Errors>Please add a course name</Errors>}

                    <NotesInput
                        type='text'
                        name='notes'
                        placeholder='Notes/Comments'
                        ref={register({
                            required: 'Course comments are required'
                        })}
                    />
                    {errors.notes && <Errors>Please add course notes</Errors>}

                    <ConfirmButton type='submit'>
                        <ButtonText>Confirm</ButtonText>
                    </ConfirmButton>
            </Form>
        </div>
        </TrainingContainer>
    )
}





