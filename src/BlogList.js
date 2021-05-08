/**
 * @Date:   2021-05-06T11:55:59+01:00
 * @Last modified time: 2021-05-06T12:15:54+01:00
 */

import { Link } from "react-router-dom";

 //------------------Use Component in other Component-----------
 const BlogList = ({ blogs, title,handleDelete}) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
