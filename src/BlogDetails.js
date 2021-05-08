import { useParams } from "react-router";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom"
import {React} from "react"

const BlogDetails = () => {
 const {id}=useParams()
 const {data:blog,isPending,erreur}=useFetch("http://localhost:8000/blogs/"+id)  
 const history=useHistory(); 
 const handleClick =()=>{
  fetch("http://localhost:8000/blogs/"+id,
  {method:"DELETE",}).then(()=>{console.log("blog deleted");}) 
  history.push("/");
  window.location.reload();
 }
  return(
<div className="blog-details">
    {isPending && <h1>Loading...</h1>}
    {erreur && <div>{erreur}</div>}
    {blog &&
    ( <article>
    <h1>{blog.title}</h1>
      <h2>{blog.author}</h2> 
      <div>{blog.body} </div>
      <button onClick={handleClick}>Delete Blog</button>
      </article>)
      }
</div>


  )    
}
 
export default BlogDetails;