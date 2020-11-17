import logo from './logo.svg';
import styled from 'styled-components'
import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  }

  .right-aligned{
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin: 1rem;
  }

  .input-field{
    background-color: #F4F6F7;
    border-color: white;
    height: 2rem;
    margin-top: .5rem;
    margin-right: 1rem;
    width: 264px;
  }

  .profilePic{
    width: 55px;
    height:55px;
    border-radius: 50px 50px;
    border: 2px solid #2A7DE1;
  }

  .side-nav{
    display: flex;
    justify-content: space-between;
    margin: .8rem;
    font-size: .8rem;
    text-align: center;
  }

  .link{
    text-decoration: none;
    color:#2A7DE1;
    font-family: 'Lato', sans-serif;
    background-color: #D9EAFF;
    border-radius: 10px;
    width: 4.5rem;
    padding: .4rem;
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
    /* padding-top: .2rem; */
  }
  .side-nav{
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 100%;
    justify-content: flex-start;
    height:60vh;
  }

  .link{
    align-self: flex-start;
    width: 80%;
    padding: .5rem;
    margin: 1rem;
  }

  .logout{
    width: 100%;
  }

  .log-out{
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-content: flex-end;
    padding: .5rem;
  }
}

  @media (min-width: 1024px){
  /* .lg-profilePic{
    width: 200px;
    height: 200px;
    border-radius: 100px 100px;
  }

  .side-nav{
    font-size: 1.4rem;
    height:50vh;
  }

    .link{
      width: 10rem;
  } */
  }
`

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="right-aligned">    
              <input className="input-field" type="text" placeholder="Search" /> 
            <img className="profilePic" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
          </div>
        </header>
        <div className="side-container">
          <div className="large-profile">
            <img className="lg-profilePic" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
          </div>
          <div className="side-nav">
            <Link className="link" to="">Add User</Link>
            <Link className="link" to="">Add Training</Link>
            <Link className="link" to="">Library</Link>
            <Link className="link" to="">Help</Link>
          </div>
          <div className="logout">
            <Link className="log-out" to="">Log Out</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
