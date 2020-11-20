import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components';
import '../index.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const TrainingContainer = styled.div`
    display:none; 
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(135, 141, 149, 0.75);
    z-index:9;   
    
    border:1px solid purple;

    .close{
        font-size:14px;
        margin:3% 5%;
        border: none;

    }

    .training-form {
        width: 640px;
        height: 360px;
        left: 400px;
        top: 333px;

        background: #F4F6F7;
        box-shadow: 0px 30px 60px -40px rgba(8, 46, 91, 0.49);
        border-radius: 10px;
        margin: auto auto; 
    }

    .training-title{
        width: 200px;
        height: 24px;
        margin: 3% 5% 1.5%;
       

        font-family: 'Lato', sans-serif;
        font-weight: 900;
        font-size: 10px;
        line-height: 24px;  

        letter-spacing: 3px;
        text-transform: uppercase;

        color: #25476E;
    }

    .course-input{
        width: 577px;
        height: 50px;
        border-radius:3px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        border-radius: 3px;
        margin: 1.5% 4.75%;
        border:1px solid #E8E8E8;
    }

    .notes-input{
        width: 577px;
        height: 127px;
        border-radius: 3px;
        margin: 1.5% 4.75%;
        vertical-align: top;



        background: #F4F6F7;
        border-radius: 3px;
        border:1px solid #E8E8E8;
    }

    .training-button{
        width: 580px;
        height: 47px;
        border-radius: 100px;
        margin: 1.5% 4.5%;
        border: none;

        background: #2A7DE1;
        
    
    }

    .training-confirm{
        height: 22px;
        font-family: 'Fira Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin: 1.3% 5%;

        color: #FFFFFF;
    }   
`

const Errors = styled.span`
        color:red;
        font-size:0.5rem;
        text-align:left;
        width:75%;
    `
    

export default function TrainingForm() {

    const {register, handleSubmit, setValue, errors} = useForm()

    const toggleTForm = () => {
        const trainingForm = document.getElementById('training-section')
        if(trainingForm.style.display === 'none'){
            trainingForm.style.display = 'flex'
        }else {
            trainingForm.style.display = 'none'
        }
    }

    const onSubmit = (training) => {
        const { name, notes } = training
        const trainingForm = document.getElementById('training-section')
        
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        const tdate = mm + '-' + dd + '-' + yyyy;
        const date = tdate

        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var ctime = hours + ':' + minutes + ampm;
        const time = ctime
        
        var user_id = 1;

        const newTraining = { name, date, time, notes, user_id  }
        console.log(newTraining)
        axiosWithAuth().post('/trainings', newTraining)
        .then(res => {console.log(res.data)
        setValue('name', '')
        setValue('notes', '')
        trainingForm.style.display = 'none'
        })
        .catch(err => console.log(err))
    } 
    
    
    
    return(
        <TrainingContainer id='training-section'>
            <form className='training-form' onSubmit = {handleSubmit(onSubmit)}>
                <button className='close' onClick={toggleTForm}>&#10005;</button>
                <h3 className='training-title'>Create a Training</h3>
                <input
                    className='course-input'
                    type='text'
                    name='name'
                    placeholder=' Courses'
                    ref={register({
                        required: 'Course name is required'
                    })}
                    />
                    {errors.course && <Errors>Please add a course name</Errors>}

                    <input
                        className='notes-input'
                        type='text'
                        name='notes'
                        placeholder=' Notes/Comments'
                        heitht="147"
                        ref={register({
                            required: 'Course comments are required'
                        })}
                    />
                    {errors.notes && <Errors>Please add course notes</Errors>}

                    <button className='training-button' type='submit'>
                        <p className='training-confirm'>Confirm</p>
                    </button>
            </form>
        </TrainingContainer>
    )
}





