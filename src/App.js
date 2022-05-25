import {Route,Switch} from 'react-router-dom';

// Importing of other pages.
import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

// Function Runs on start because refferd in Index.js
function App() {
  return (
    <div>
      <Switch>  
      <Route path={'/'} exact={true}>  
       <AllMeetupPage/> 
        </Route>
        <Route path={'/new-meetup'}>
          <NewMeetupPage/>
          </Route>
        <Route path={'/favourite'}>
          <FavouritesPage/>
          </Route> 
        </Switch>     
    </div>
  );
}

export default App;
