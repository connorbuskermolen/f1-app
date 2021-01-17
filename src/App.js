import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//import pages and header and footer
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import WDC from './pages/wdc/wdc.component';
import TechLegends from './pages/tech-legends/tech-legends.component';
import Drivers2021 from './pages/drivers2021/drivers2021.component';

import Error from './pages/error/error.component';

import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/drivers-champions' component={WDC} />
        <Route path='/technical-legends' component={TechLegends} />
        <Route path='/drivers' component={Drivers2021} />
        <Route path='/records' component={Error} />
        <Route path='/constructors-champions' component={Error} />
        <Route path='/events' component={Error} />
        <Route path='/history' component={Error} />
        <Route path='/tracks' component={Error} />
        <Route path='/stats' component={Error} />
        <Route path='/terminology' component={Error} />
        {/* <Route path='/news' component={Error} />
        <Route path='/standings' component={Error} /> */}
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;

//any page pointing to error will have its own page once created
