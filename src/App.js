/**
 * @Date:   2021-05-06T08:42:21+01:00
 * @Last modified time: 2021-05-06T10:15:37+01:00
 */

import Navbar from './Navbar';
import './index.css';
import Home from './Home'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from "./NotFound"
function App() {

  return (
    <Router>
    <div className="App">
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/"> 
      <Home></Home>
      </Route>
      <Route  path="/create"> 
      <Create></Create>
      </Route>
      <Route  path="/blogs/:id"> 
      <BlogDetails></BlogDetails>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
