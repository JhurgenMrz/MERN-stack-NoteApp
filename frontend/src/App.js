import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav'
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser'

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <Route  path="/" exact component={NotesList}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/create/" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>

    </BrowserRouter>
  );
}

export default App;
