import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import IdeaDetails from './components/idea/IdeaDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import CreateIdea from './components/idea/CreateIdea';
import M from "materialize-css"
import AccountDisplay from './components/account/AccountDisplay';
// import SearchNav from './components/layout/SearchNav';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* <SearchNav/> */}
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/Share/' component={Dashboard}/>
          <Route path='/idea/:id' component={IdeaDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateIdea}/>
          <Route path='/account' component={AccountDisplay}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
