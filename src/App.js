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
import OrderList from './components/Admin/OrderList/OrderList';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import NotAdmin from './components/NotAdmin/NotAdmin';
import ManageProduct from './components/Admin/ManageProduct/ManageProduct';

export const UserContext = createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState({success:false})
  const [isAdmin,setIsAdmin] = useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser,isAdmin,setIsAdmin]} >
      <Router>
        <Switch>   
          <PrivateRoute path="/notAdmin">
            <NotAdmin/>
          </PrivateRoute>
        <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
        <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct/>
          </PrivateRoute>
        <PrivateRoute path="/addProduct">
            <AddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
        <PrivateRoute path="/checkOut/:id">
            <CheckOut/>
          </PrivateRoute>
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
