import React from 'react';
import './App.css';
import Header from './components/header' 
import Footer from './components/footer'
import Numbers from './components/numbers'
import styled from 'styled-components'

function createAlert(){
  alert('Hello. You clicked me!');
}

const pStyle = {
  fontSize: '2em',
  color: 'blue'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`

function App() {
  const userlogin = true;
  if (userlogin) {
    return (
      <div className="App">
       <Numbers />
      </div>
    );
  } else {
    return <h2>Forbidden</h2>
  }
}

export default App;
