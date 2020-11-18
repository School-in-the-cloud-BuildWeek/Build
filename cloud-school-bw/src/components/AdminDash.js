import React from 'react';
import { Route, NavLink, Link } from "react-router-dom";
import VolunteerList from './VolunteerList';
import StudentList from './StudentList';
import styled from 'styled-components'
import Navigation from './Navigation'

const AdminContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    /* *{
        border: 1px red solid;
    } */
    .user-wrapper{
        /* display: flex;
        flex-direction: column;
        flex-wrap: wrap; */
        background: #E5E5E5;
        width: 100%;
    }
    .nav-tabs{
        display: flex;
        width: 100%;
        font-family: 'Lato', sans-serif;
        justify-content: center;
        font-size: 1.4rem;
    }

    .tab1{
        background-color: #2A7DE1;
        display: inline-block;
        padding: 1rem 2.5rem;
        color: #D9EAFF;
        border-radius: 10px 10px 0px 0px;
        box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
        width: 6rem;
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
         width: 6rem;
         text-decoration: none;
     }
     .tab2:hover {
         background-color: #2A7DE1;
         color: #D9EAFF;
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
        margin-top: 8rem;
        width: 60%;
        margin-left: 15rem;
        }   
    }
`
const DashLinks= styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 48rem;
    font-size: 1.2rem;
    text-align: center;
     .dash{
         text-decoration: none;
         color: #2A7DE1;
         font-family: 'Lato', sans-serif;
         padding: .5rem 1.5rem;
         
     }


`

const AdminDash = (props) => {
 
    return (
    <AdminContainer>
        <div className="user-wrapper">
            <Navigation />
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
            <DashLinks className="dash-links">
                <Link className="dash" to="/VolunteerDash">Volunteer Dashboard</Link>
                <Link className="dash" to="/StudentDash">Student Dashboard</Link>
            </DashLinks>
    </AdminContainer>
    )
}

export default AdminDash
