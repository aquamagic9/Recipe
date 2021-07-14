import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import SearchPage from './SearchPage/SearchPage'



function App() {
  return (
    <div>
      <Route path="/" component={LandingPage} exact={true}/>
      <Route path="/search" component={SearchPage}/>
    </div>
  );
}

export default App;
