import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';
import CheckOut from './components/CheckOut/CheckOut';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import ManageProduct from './components/Admin/ManageProduct/ManageProduct';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState({success:false})
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <Router>
        <Switch>
        <PrivateRoute path="/manageProduct">
            <ManageProduct/>
          </PrivateRoute>
        <PrivateRoute path="/addProduct">
            <AddProduct/>
          </PrivateRoute>
        <Route path="/checkOut/:id">
            <CheckOut/>
          </Route>
        <Route path="/signIn">
            <SignIn/>
          </Route>
        <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
          
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
