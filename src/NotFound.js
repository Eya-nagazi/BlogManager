import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
const NotFound = () => {
    const history=useHistory();

    return ( 
        <div  className="not-found">
            <h1>Sorry the page not found</h1>  
            
            <button onClick={()=>{history.push('/')}} >Back to Home</button>
        </div>
     );
}
 
export default NotFound;