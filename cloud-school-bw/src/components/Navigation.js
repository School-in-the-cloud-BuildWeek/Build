import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  
  /* *{
    border: 1px blue solid;
  } */
  .App-header{
    width: 100%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding-top: 1rem;
  }

  .right-aligned{
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin: 1rem;
  }
  .form-inline{
      display: flex;
      justify-self: center;
      align-self: center;
  }
    .form-control{
    background-color: #F4F6F7;
    width: 10rem;
    margin-left: .5rem;
    }

    .btn{
        border-color: #2A7DE1;
        color: #2A7DE1;
        background-color: #D9EAFF;
        margin-right: .5rem;
        margin-left: .5rem;
    }
  
  .profilePic{
    width: 55px;
    height:55px;
    border-radius: 50px 50px;
    border: 2px solid #2A7DE1;
    align-self: center;
  }

  .side-nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-size: .8rem;
    text-align: center;
  }

  .link{
    text-decoration: none;
    color:#2A7DE1;
    font-family: 'Lato', sans-serif;
    background-color: #D9EAFF;
    border-radius: 10px;
    width: 5.5rem;
    padding: .4rem;
    box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
    margin: .5rem .3rem;

  }
  .add-links{
    display: flex;
    flex-direction: row;
  }
    .dash{
    color:#D9EAFF;
    background-color: #2A7DE1;
    width: 10rem;
    }

  .logout{
    width: 100%;
    padding-bottom: 1rem;
  }

  .log-out{
    display: flex;
    justify-content: center;
    align-content: flex-end;
    font-size: 1rem;
    color:#2A7DE1;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    margin-top: 1rem;
  }
  
  .lg-profilePic{
    display: none;
  }

  @media (min-width: 768px){

  .App-header{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: nowrap;
    padding-top: .3rem;
  }

  .logo{
    align-self: center;
    margin-left: 1rem;
  }

  .large-profile{
    width: 100%;
    margin-top: .5rem;
    padding-top: 1px;
  }
  .form-control{
    background-color: #F4F6F7;
    width: 15rem;
    margin-left: .5rem;
    }

  .lg-profilePic{
    display: flex;
    justify-content: center;
    max-width: 150px;
    max-height: 150px;
    border-radius: 75px 75px;
    border: 2px solid #2A7DE1;
    margin: 1rem 2.5rem;
  }
  .side-container{
    max-width: 14.5rem;
    background: #F4F6F7;
    height: 90vh;
  }
  .side-nav{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1rem;
    align-content: center;
    justify-content: center;
  }

  .link{
    width: 5.5rem;
    padding: .4rem;
    box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
    margin: .3rem .3rem;
    /* width: 80%; */
    padding: .5rem;
    
  }

  .add-links{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .add{
      width: 80%;
  }
  .dash-link{
      width:100%;
  }
  .dash{
    width: 80%;
    }

  .logout{
    width: 100%;

  }

  .log-out{
    font-size: 1rem;
    justify-content: center;
    align-content: flex-end;
    padding: .5rem;
    margin-top: 7rem; 
    position: fixed;
    bottom: 0;
    
  }
  hr{
      border: 1px solid #2A7DE1;
      width: 60%;
  }
}

  @media (min-width: 1024px){
    .side-nav{
    display: flex;
    flex-direction: column;

  }
  .log-out{
    margin-top: 8.5rem;
  }
  
  .link{
      margin-top: 1.4rem;
  }
  }
`
const Navigation = () => {

  const showTrainingForm = () => {
    const tForm = document.getElementById('training-form')
    if(tForm.style.dispaly === 'none'){
      tForm.style.dispaly = 'block'
    }
    else {
      tForm.style.display = 'none'
    }
  };

    return (
    <Container>
        <header className="App-header">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="right-aligned">    
            {/* <input className="input-field" type="search" placeholder="Search" />  */}
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <img className="profilePic" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
          </div>
        </header>
        <div className="side-container">
            <div className="large-profile">
                <img className="lg-profilePic" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
            </div>
            <div className="side-nav">
              <div className=" side-nav add-links">
                    {/* link to add user/signup form */}
                    <Link className="link add add-user" to="/sign-up">Add User</Link>
                    {/* link to add training form */}
                    <Link className="link add add-training" to="">Add Training</Link>
                    {/* empty link right now add to= when ready*/}
                    <Link className="link add" to="" >Library</Link>
                    {/* empty link right now, add to= when ready*/}
                    <Link className="link add" to="">Help</Link>
                    <hr></hr>
                </div>
                <div className="side-nav dash-link">
                    <Link className="link dash volunteer-dash" to="/VolunteerDash">Volunteer Dashboard</Link>
                    <Link className="link dash" to="/StudentDash">Student Dashboard</Link>
                </div>  
            </div>
            <div className="logout">
                {/* link to logout user */}
                <Link className="log-out" to="">Log Out</Link>
            </div>
        </div>
    </Container>
    )
}

export default Navigation
