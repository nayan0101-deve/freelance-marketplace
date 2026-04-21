import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import BrowseJobs from './pages/BrowseJobs';
import BrowseTalent from './pages/BrowseTalent';
import PostJob from './pages/PostJob';
import TalentProfile from './pages/TalentProfile';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/browse-jobs' component={BrowseJobs} />
        <Route path='/browse-talent' component={BrowseTalent} />
        <Route path='/post-job' component={PostJob} />
        <Route path='/talent-profile' component={TalentProfile} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/messages' component={Messages} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;