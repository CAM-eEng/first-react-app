import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

const context = React.createContext();
export const CtxConsumer = context.Consumer;

const animals = ['snake', 'elephant', 'lion'];

const routing = (
  <BrowserRouter>
    <context.Provider value={{animals: animals}}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/footer" component={Footer} />
      </div>
    </context.Provider>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();