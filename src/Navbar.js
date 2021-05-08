/**
 * @Date:   2021-05-06T09:36:40+01:00
 * @Last modified time: 2021-05-06T10:23:41+01:00
 */
import {Link} from 'react-router-dom'
const  Navbar= () => {
return(
  <nav className="navbar">

  <h1>Blogs Manager</h1>
  <div className="links">
  <Link to="/" >Home</Link>
  <Link to="/create">New Blog</Link>
  
  </div>
  </nav>
);
}
export default Navbar;
