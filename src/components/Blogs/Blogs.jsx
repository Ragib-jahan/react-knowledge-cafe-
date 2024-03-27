import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMakeAsRead }) => {

    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blog.json')
            .then(ref => ref.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2>Blogs: {Blogs.length}</h2>
            {
                Blogs.map(blog => <Blog handleMakeAsRead={handleMakeAsRead} blog={blog} handleAddToBookmark={handleAddToBookmark} key={blog.id}></Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMakeAsRead: PropTypes.func
};

export default Blogs;