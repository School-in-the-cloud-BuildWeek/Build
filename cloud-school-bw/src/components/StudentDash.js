import React from 'react';
import styled from 'styled-components'
import Navigation from './Navigation'
import AvailabilityData from './AvailabilityData';

const VolunteerContainer = styled.div`
    margin: 0;
    padding: 0;

    .add-user{
        display: none;
    }
    .volunteer-dash{
        display: none;
    }
    .add-training{
        display: none;
    }
    .student-dash{
        display: none;
    }
    .body-container{
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .nav-tabs{
        display: flex;
        width: 100%;
        font-family: 'Lato', sans-serif;
        justify-content: center;
        font-size: 1.4rem;
        text-align: center;
        align-content: center;
        height: 6vh;
        border: none;
    }

    #tab1{
        background-color: #2A7DE1;
        display: inline-block;
        padding: .5rem 2rem;
        color: #FAFAFB;
        border-radius: 10px 10px 0px 0px;
        box-shadow: 0em 0 .2em rgba(0, 0, 0, 0.2);
        width: 13rem;
        text-decoration: none;
        margin: 0 3rem;
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
    }
    @media (min-width: 1024px){
        .nav-tabs{
        position: absolute;
        margin-top: 7.5rem;
        margin-left: 8rem;
        }  
    }
`

const StudentDash = (props) => {
    
    const showAvailability = () => {
        const avbList = document.getElementById('avb-list');
        const avbButton = document.getElementById('tab1');
       

        return (
            
            avbList.style.display = 'flex',
            avbButton.style.backgroundColor = '#2A7DE1',
            avbButton.style.color = '#D9EAFF'
            
        )
    }
    return (
    <VolunteerContainer>
        
        <div className="user-wrapper">
            <Navigation />
            <div className="nav-tabs">
                <div>
                    <button id="tab1" to="/StudentDash">Volunteers</button>
                </div>
                <AvailabilityData/> 
            </div>
          </div>  
    </VolunteerContainer>
    )
}
export default StudentDash

