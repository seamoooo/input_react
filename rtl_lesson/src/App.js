import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RenderInput from './RenderInput';
import {List} from './List'
import UseEffectRender from './UseEffectRender';
import CustomHooks from './CustomHooks';
import MocServer from './MocServer';

function App() {
  const data = [
    {
      id:1,item: "React"
    },
    {
      id:2,item: "Vue"
    },
    {
      id:3,item: "Angular"
    },
    {
      id:4,item: "Next"
    },
    {
      id:5,item: "Nuxt"
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput outputConsole={console.log} />
        <List freamworks={data}/>
        <List/>
        <UseEffectRender/>
        <CustomHooks/>
        <MocServer/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
