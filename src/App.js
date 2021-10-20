import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Common/Header/Header';
import Departments from './Components/Departments/Departments';
import Footer from './Components/Common/Footer/Footer';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Contact from './Components/Contact/Contact';
import Authentication from './Components/Authentication/Authentication';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/authentication">
            <Authentication></Authentication>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
