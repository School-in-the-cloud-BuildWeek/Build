import React from 'react';
import { Route, NavLink } from "react-router-dom";
import VolunteerList from './VolunteerList';
import StudentList from './StudentList';
import styled from 'styled-components'
import Navigation from './Navigation'

const AdminContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    
    border: 1px blue solid;
/* body space */
    .body-wrapper{
        background: #E5E5E5;
        width: 100%;
    }
    .body-container{
        height: 100vh;
        border: 4px orange solid;
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
        height: 10vh;
    }
    /* volunteer tab */
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
    /* students tab */
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
         color: #FAFAFB;;
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

const AdminDash = (props) => {
 
    return (
    <AdminContainer>
        
        <div className="body-wrapper">
            <Navigation />
            <div class="body-container">
                <div className="nav-tabs">
                    <div>
                        <NavLink activeClassName="active" className="tab1" to="/admin/volunteers">Volunteers</NavLink>
                    </div>
                    <div >
                        <NavLink activeClassName="active" className="tab2" to="/admin/students">Students</NavLink></div>
                    </div>
                    <Route path="/admin/volunteers" component={VolunteerList} />
                    <Route path="/admin/students" component={StudentList} />
                </div>
            </div>
    </AdminContainer>
    )
}

export default AdminDash
