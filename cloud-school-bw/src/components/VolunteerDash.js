import React from 'react';
import { Route, NavLink } from "react-router-dom";
import TrainingData from './TrainingData';
import StudentList from './StudentList';
import styled from 'styled-components'
import Navigation from './Navigation'

const VolunteerContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;

    .add-user{
        display: none;
    }
    .volunteer-dash{
        display: none;
    }
    .user-wrapper{
        background: #E5E5E5;
        width: 100%;
    }
    .nav-tabs{
        display: flex;
        width: 100%;
        font-family: 'Lato', sans-serif;
        justify-content: center;
        font-size: 1.4rem;
        text-align: center;
    }

    .tab1{
        background-color: #2A7DE1;
        display: inline-block;
        padding: 1rem 2.5rem;
        color: #FAFAFB;
        border-radius: 10px 10px 0px 0px;
        box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
        width: 11rem;
        text-decoration: none;
        margin: 0 .3rem;
    }
    .tab1:hover{
        background-color: #D9EAFF;
        color: #2A7DE1;
    }
    .tabOne.active {
         background-color: #D9EAFF;
         color: #2A7DE1;
     }
     .tab2 {
         background-color: #D9EAFF;
         display: inline-block;
         padding: 1rem 2.5rem;
         color: #2A7DE1;
         border-radius: 10px 10px 0px 0px;
         box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
         width: 11rem;
         text-decoration: none;
     }
     .tab2:hover {
         background-color: #2A7DE1;
         color: #FAFAFB;
     }

     .tab2.active {
         background-color: #2A7DE1;
         color: #D9EAFF
     }
     @media (min-width: 768px){
        .user-wrapper{
            display: flex;
            flex-direction: row;
        }
        .nav-tabs{
        position: absolute;
        margin-top: 6.5rem;
        width: 60%;
        margin-left: 15rem;
        }  
        .tab1{
        padding: .5rem 2.5rem; 
        }
        .tab2{
        padding: .5rem 2.5rem; 
        }
    }
    @media (min-width: 1024px){
        .nav-tabs{
        position: absolute;
        margin-top: 7.5rem;
        }  
    }
`

const VolunteerDash = (props) => {
 
    return (
    <VolunteerContainer>
        
        <div className="user-wrapper">
            <Navigation />
            <div className="nav-tabs">
                <div>
                    <NavLink activeClassName="active" className="tab1" to="/VolunteerDash/trainings">Trainings</NavLink>
                </div>
                <div >
                    <NavLink activeClassName="active" className="tab2" to="/admin/students">Students</NavLink></div>
                </div>
                <Route path="/VolunteerDash/trainings" component={TrainingData} />
                <Route path="/admin/students" component={StudentList} />
            </div>
            
    </VolunteerContainer>
    )
}

export default VolunteerDash
