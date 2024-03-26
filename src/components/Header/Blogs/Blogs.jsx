import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";


const Blogs = () => {
    
const [Blogs, setBlogs] = useState([]);

useEffect(()=>{
    fetch('Blog.json')
    .then(ref => ref.json())
    .then(data => setBlogs(data))
},[])
    return (
        <div className="w-2/3">
          <h2>Blogs: {Blogs.length}</h2>
          {
            Blogs.map(blog => <Blog blog = {blog} key={blog.id}></Blog>)
          }
          
        </div>
    );
};

export default Blogs;