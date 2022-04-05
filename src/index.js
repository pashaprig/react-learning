import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id : 1, message : 'Hi, its me.', likes : 3, imgSrc : 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'},
  {id : 2, message : 'Hi, its you.', likes : 8, imgSrc : 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'}
]

let dialogs = [
  { id: 1, name: 'Anton' },
  { id: 2, name: 'Pasha' },
  { id: 3, name: 'Victor' },
  { id: 4, name: 'Dima' },
  { id: 5, name: 'Stas' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Im from IT' },
  { id: 3, message: 'ok' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
