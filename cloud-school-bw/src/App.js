import React from 'react';
import AdminDash from './components/AdminDash';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'
import styled from 'styled-components'
import VolunteerDash from './components/VolunteerDash'
import StudentDash from './components/StudentDash'

const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`


function App() {

  return (
      <AppContainer className="App">
        <Switch>
          <Route path="/admin" component={AdminDash} />
          <Route path= "/volunteerDash" component={VolunteerDash} />
          <Route path= "/studentDash" component={StudentDash} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={Login} />
        </Switch>
      </AppContainer>
  );
}

export default App;
