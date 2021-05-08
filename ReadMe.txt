----------------Define a function----------
const FunctionName=()=>{};


--------------Catch error---------------
.catch(err=>{})
-------------Diplay HTML code with respect to a given condition--------
{condition && <HTML>}
-------show error-----------------
throw Error("error text")
-----Routing with react-----------
import {Link} from 'react-router-dom'
<Link to="/" </LINK>
Link<=>a
to<=>href
-------AbortController------------------
to control a given fetch
-----Delete element from an object----------
 const newblogs=blogs.filter(blog=>blog.id!==id);
setBlogs(newblogs);
 handleDelete={handleDelete} 
 -------associate function to button event--------
 <button  onClick={()=>handleDelete(blog.id)}>
 when we click the button we execute the handleDelete function
 ----------How to control inputs------------
 for each input we execute the following steps:
 =>[input,setinput]=useState('')
 =><input onChange{(e)=>setinput(e.target.value)}>
 -------------Post data in JSON file-------------------
 fetch("end point",{method:'POST',headers:{"Content-Type":"application/json",body:JSON.stringify(data)}})
---------------Go back in the previous page (histrory)---------
import {useHistory} from 'react-router-dom'
const history= useHistory();
history.go(-1):go to the previous page
history.go(+1):go to the next page
history.push("path") : go to the path 
------------reload the page-----------------
import {React} from react
window.location.reload();
