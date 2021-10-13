
import{Link,BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from'./Form Components/Fields/Login';
import Home from './Form Components/Home';
import Dashboard from './Form Components/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import{useState} from 'react';
import Footer from './footer';

import Navbars from './Navbars';


function App() {
  const [isAuth,setAuth]=useState(false);
  return (
    <>
    <Router>
    <Navbars/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path= '/dashboard' component={Dashboard}/>
    </Switch>
  </Router>
 
  </>

);
}

export default App;
