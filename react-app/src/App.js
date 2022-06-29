
// React Components
import Navbar from './Navbar';
import Home from './Home';
import Games from './Games';
import ComingSoon from './ComingSoon';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import GamePreview from './GamePreview';
import Purchase from './Purchase';
// Utils
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  //const title = "App Content";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route exact path="/Games"> 
              <Games />
            </Route>
            <Route exact path="/ComingSoon"> 
              <ComingSoon />
            </Route>
            <Route exact path="/AboutUs"> 
              <AboutUs />
            </Route>
            <Route exact path="/ContactUs"> 
              <ContactUs />
            </Route>
            <Route exact path="/GamePreview"> 
              <GamePreview />
            </Route>
            <Route exact path="/Purchase"> 
              <Purchase />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
