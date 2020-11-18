import React from 'react';
import { Route, Link } from "react-router-dom";
import VolunteerList from './VolunteerList';
import StudentList from './StudentList';
import styled from 'styled-components'



const AdminContainer = styled.div`
    display: flex;
    *{
        border: 1px red solid;
    }
    .user-wrapper{
        background: #E5E5E5;
        width: 80vw;
    }
    .nav-tabs{
        display: flex;
        width: 80%;
        font-family: 'Lato', sans-serif;
        margin-left: 1rem;
    }

    .tab1{
        background-color: #2A7DE1;
        display: inline-block;
        padding: 1rem 2.5rem;
        color: #D9EAFF;
        border-radius: 10px 10px 0px 0px;
        width: 10rem;
        text-decoration: none;
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
         width: 10rem;
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
     
    

`

const AdminDash = (props) => {
 
    return (
    <AdminContainer>
        
            <div className="side-container">
            <div className="large-profile">
                <img className="lg-profilePic" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
            </div>
            <div className="side-nav">
                {/* link to add user/signup form */}
                <Link className="link" to="">Add User</Link>
                {/* link to add training form */}
                <Link className="link" to="">Add Training</Link>
                {/* empty link right now */}
                <Link className="link" to="">Library</Link>
                {/* empty link right now */}
                <Link className="link" to="">Help</Link>
            </div>
            <div className="logout">
                {/* link to logout user */}
                <Link className="log-out" to="">Log Out</Link>
            </div>
            </div>
            <div>
            <div className="user-wrapper">
            <div className="nav-tabs">
                <div ><Link className="tab1" to="/admin/volunteers">Volunteers</Link></div>
                <div ><Link className="tab2" to="/admin/students">Students</Link></div>
            </div>
            <Route path="/admin/volunteers" component={VolunteerList} />
            <Route path="/admin/students" component={StudentList} />
        </div>
        </div>
    </AdminContainer>
    )
}

export default AdminDash
