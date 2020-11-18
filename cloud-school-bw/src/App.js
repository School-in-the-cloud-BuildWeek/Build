import React from 'react';
import AdminDash from './components/AdminDash';
import {Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
      <div className="App">
        <Switch>
          <Route path="/admin" component={AdminDash}/>
          {/* <Route path= "/volunteerDash" component={VolunteerDash}>
            
          </Route> 
          <Route path= "/studentDash" component={StudentDash}>
        
          </Route  */}
            <Route path="/sign-up" component={SignUp}/>
            <Route exact path="/" component={Login}/>
            {/* <Login/> */}
        </Switch>
      </div>
  );
}

export default App;
