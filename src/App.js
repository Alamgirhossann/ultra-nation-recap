import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './components/Home/Home';

import CountryDetail from './components/CountryDetail/CountryDetail';
import NoMatch from './components/NoMatch/NoMatch';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail></CountryDetail>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
     
  );
}

export default App;
