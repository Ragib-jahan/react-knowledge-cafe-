import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div>
            <img className='w-full' src={cover} alt={`Cover Picture Of The Title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <h5>{posted_date}</h5>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} mim read</span>
                    <button className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}>#<a className='mr-10' href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;