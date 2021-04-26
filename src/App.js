import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/project/CreateProject';
import ProjectDetails from './components/project/ProjectDetails';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar></Navbar>
     <Switch>
       <Route path='/' exact component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetails} />
       <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp} />
       <Route path='/create' component={CreateProject} />
       

     </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
