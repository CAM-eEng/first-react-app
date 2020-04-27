import React from 'react';
import './App.css';
import Header from './components/header' 
import Footer from './components/footer'

function createAlert(){
  alert('Hello. You clicked me!');
}

function App() {
  const userlogin = true;
  if (userlogin) {
    return (
      <div className="App">
        <Header info="this is my message" />
        <Footer trademark="page by Cameron Hartman"
          myAlert={createAlert}/>
      </div>
    );
  } else {
    return <h2>Forbidden</h2>
  }
}

export default App;
