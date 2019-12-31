import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Context from './components/context';
import Navbar from './components/navbar';

import StartPage from './components/startPage';
import Meditations from './components/meditations';
import AboutUs from './components/aboutUs';
import Help from './components/help';
import Footer from './components/footer';
import './App.scss';


function App() {
  const context = useContext(Context);
  const [state, setState] = useState(context);

  return (
    <Context.Provider value={[state, setState]}>

      <Router>
        <div className="App site">
          <div className="site-content">
            <header className="App-header">
              <Navbar />
            </header>
            <div className="main">
              <main className="container mt-2">
                <Switch className="switch">
                  <Route exact path="/" component={StartPage} />
                  <Route path="/meditationer" component={Meditations} />
                  <Route path="/tipsOchRådSida" component={Help} />
                  <Route path="/omOssSida" component={AboutUs} />
                </Switch>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </Router>

    </Context.Provider>
  );
}

export default App;
