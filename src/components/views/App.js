import React from 'react';
import { Route } from 'react-router-dom';
import DetailPage from './DetailPage/DetailPage';
import LandingPage from './LandingPage/LandingPage'
import SearchPage from './SearchPage/SearchPage'


function App() {
  return (
    <div>
      <Route path="/" component={LandingPage} exact={true}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/detail" component={DetailPage}/>
    </div>
  );
}

export default App;
