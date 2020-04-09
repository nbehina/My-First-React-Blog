import React from 'react';
import { Heading } from './components/Heading';
import Person from './components/Person';
import logo from './logo.svg';
import './App.css';
import { List } from 'semantic-ui-react'

const myPersonFunction = ( input: string ): string => {
  return input;
}

function App() {
  return (
    <div className="App">{/* This is a JSX comment! */}
      <header className="App-header">
      <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person firstName="Niloufar" lastName ="Behin Aein" callbackMethod={myPersonFunction} />
        <List bulleted horizontal>
        <List.Item as='a'>About Me</List.Item>
         <List.Item as='a'>Contact</List.Item>
  </List>
      </header>
    </div>
  );
}

export default App;
