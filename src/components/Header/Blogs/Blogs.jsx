import { useEffect, useState } from "react";


const Blogs = () => {
    
const [Blogs, setBlogs] = useState([]);

useEffect(()=>{
    fetch('Blog.json')
    .then(ref => ref.json())
    .then(data => setBlogs(data))
},[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;