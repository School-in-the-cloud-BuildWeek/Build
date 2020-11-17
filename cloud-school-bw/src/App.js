 import './App.css';
import SignUp from './components/SignUp'
import styled from 'styled-components';
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
