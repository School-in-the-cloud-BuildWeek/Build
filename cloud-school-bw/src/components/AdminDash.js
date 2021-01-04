import React from 'react';
import VolunteerList from './VolunteerList';
import StudentList from './StudentList';
import styled from 'styled-components';
import Navigation from './Navigation';
import TrainingForm from './TrainingForm';


const AdminContainer = styled.div`
    margin: 0;
    padding: 0;
    
/* body space */
    /* .body-wrapper{
        background: #E5E5E5;
        width: 100%;
    } */
    .body-container{
        height: 100vh;
        display: flex;
        flex-direction: row;

    }
/* buttons on body section */
    .nav-tabs{
        display: flex;
        width: 100%;
        font-family: 'Lato', sans-serif;
        justify-content: center;
        font-size: 1.4rem;
        text-align: center;
        height: 6vh;
        border: none;
    }
    /* volunteer tab */
    #tab1{
        background-color: #2A7DE1;
        display: inline-block;
        padding: .5rem 2rem;
        color: #FAFAFB;
        border-radius: 10px 10px 0px 0px;
        box-shadow: 0em 0 .2em rgba(0, 0, 0, 0.2);
        width: 11rem;
        text-decoration: none;
        margin: 0 .3rem;
        border: none;
    }
    
     #tab2 {
         background-color: #D9EAFF;
         display: inline-block;
         padding: .5rem 2rem;
         color: #2A7DE1;
         border-radius: 10px 10px 0px 0px;
         box-shadow: 0em 0 .2em rgba(0, 0, 0, 0.2);
         width: 11rem;
         text-decoration: none;
         border: none;
     }

     @media (min-width: 768px){
        .user-wrapper{
            display: flex;
            flex-direction: row;

            
        }
        .nav-tabs{
        position: absolute;
        margin-top: 8rem;
        width: 60%;
        margin-left: 13rem;
        
        }  
        #tab1{
        padding: .5rem 2.5rem; 
        }
        #tab2{
        padding: .5rem 2.5rem; 
        }
    }
    @media (min-width: 1024px){
        .nav-tabs{
        position: absolute;
        margin-top: 7.5rem;
        margin-left: 8rem;
        }  
    }
`

const AdminDash = (props) => {
    const showVolunteers = () => {
        const studList = document.getElementById('student-list');
        const volList = document.getElementById('volunteer-list');
        const volButton = document.getElementById('tab1');
        const studButton = document.getElementById('tab2');

        return (
            studList.style.display = 'none',
            studButton.style.backgroundColor = '#D9EAFF',
            studButton.style.color = '#2A7DE1',
            
            volList.style.display = 'flex',
            volButton.style.backgroundColor = '#2A7DE1',
            volButton.style.color = '#D9EAFF'
         
        )
    }

    const showStudents = () => {
        const studList = document.getElementById('student-list');
        const volList = document.getElementById('volunteer-list');
        const studButton = document.getElementById('tab2')
        const volButton = document.getElementById('tab1')

        return (
            studList.style.display = 'flex',
            studButton.style.backgroundColor = '#2A7DE1',
            studButton.style.color = '#D9EAFF',
            
            volList.style.display = 'none',
            volButton.style.backgroundColor = '#D9EAFF',
            volButton.style.color = '#2A7DE1'
            
        )
    }
        

 
    return (
    <AdminContainer>
        <div className="user-wrapper">
            <Navigation />
            <div className="nav-tabs">
                <div>
                    <button onClick={showVolunteers} id="tab1" >Volunteers</button>
                </div>
                <div>
                    <button onClick={showStudents} id="tab2" >Students</button>
                </div>
            </div>
                <VolunteerList/>
                <StudentList />
                <TrainingForm />
            </div>
    </AdminContainer>
    )
}

export default AdminDash
