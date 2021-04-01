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
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/manageProduct">
            <ManageProduct/>
          </Route>
        <Route path="/addProduct">
            <AddProduct/>
          </Route>
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
    </div>
  );
}

export default App;
