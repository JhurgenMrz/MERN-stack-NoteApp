import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/Nav'
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser'

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <div className="container p-4">
      <Route  path="/" exact component={NotesList}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/create/" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
