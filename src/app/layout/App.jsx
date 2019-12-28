import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import SettingsDashboard from '../../features/nav/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import PeopleDashboard from '../../features/nav/PeopleDashboard/PeopleDashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route 
        path='/(.+)' 
        render={() => (
        <Fragment>
        <NavBar />
          <Container className="main">
            <Route path='/event' component={EventDashboard}/>
            <Route path='/event/:id' component={EventDetailedPage}/>
            <Route path='/people' component={PeopleDashboard}/>
            <Route path='/profile:id' component={EventDashboard}/>
            <Route path='/settings' component={SettingsDashboard}/>
            <Route path='/createEvents' component={EventForm}/>
          </Container>
          </Fragment>
        )}
        />
                  </Fragment>

  );
}
}
export default App;