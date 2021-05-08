import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {React} from 'react'
const Create = () => {
  const [title, settitle] = useState("");
  const [body,setbody]=useState("");
  const [author, setauthor] = useState("mario");
  const [isPending,setisPending]=useState()
  const history=useHistory();
  const handleSubmit=(e)=>{
 e.preventDefault()
 const newBlog={title,body,author}
 setisPending(true)
 fetch("http://localhost:8000/blogs",
 {method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify(newBlog)

}).then(()=>{console.log("new blog added");}) 
setisPending(false)
history.push("./")
window.location.reload();

  }
    return ( 
        <div className="create">
      <h1>Add New Blog</h1>  
      <form onSubmit={handleSubmit} >

        <label>Blog title</label>
        <input type="text" required
        onChange={(e)=>(settitle(e.target.value))}
        ></input>
        <h4>{title}</h4>
        
        <label>Author</label>
        <select
        
        onChange={(e)=>(setauthor(e.target.value)) }>
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
        <option value="hugo">hugo</option>
        </select>
        <label>Content</label>
        <textarea 
        required 
        onChange={(e)=>setbody(e.target.value)}
        ></textarea>
         
         {!isPending && <button>Add Blog</button>}
         {isPending &&<button disabled>Loading</button>}
         
      </form>
        </div>
     

     );
}
 
export default Create;