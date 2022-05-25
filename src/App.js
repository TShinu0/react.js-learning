import {Route,Switch} from 'react-router-dom';

// Importing of other pages.
import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';

// Function Runs on start because refferd in Index.js
function App() {
  return (
    <div>
      <MainNavigation/>
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
