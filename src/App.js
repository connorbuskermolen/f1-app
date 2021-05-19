import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//import pages and header and footer
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import WDC from './pages/wdc/wdc.component';
import TechLegends from './pages/tech-legends/tech-legends.component';
import Drivers2021 from './pages/drivers2021/drivers2021.component';
import RecordsPage from './pages/records/records.component';
import CarsPage from './pages/cars/cars.component';
import WCC from './pages/wcc/wcc.component';
import SignInPage from './pages/sign-in/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Error from './pages/error/error.component';

import Footer from './components/footer/footer.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //the below functions handle how we are aware of any authentication changes
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if user is signing in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
              console.log(this.state);
          });
        });
      }
      // if no user, make sure the current user is NULL
      else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/drivers-champions' component={WDC} />
          <Route path='/technical-legends' component={TechLegends} />
          <Route path='/drivers' component={Drivers2021} />
          <Route path='/cars' component={CarsPage} />
          <Route path='/records' component={RecordsPage} />
          <Route path='/constructors-champions' component={WCC} />
          <Route path='/events' component={Error} />
          <Route path='/history' component={Error} />
          <Route path='/tracks' component={Error} />
          <Route path='/stats' component={Error} />
          <Route path='/terminology' component={Error} />
          <Route path='/signin' component={SignInPage} />
          {/* <Route path='/news' component={Error} />
          <Route path='/standings' component={Error} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

//any page pointing to error will have its own page once created
