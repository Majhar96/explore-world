import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Destination from './Components/Destination/Destination';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AuthProvider from './Components/Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login/Login';
import Addservice from './Components/Addservice/Addservice';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addservice">
              <Addservice></Addservice>
            </Route>
            <Route path="/details/:id">
              <Details></Details>
            </Route>
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
