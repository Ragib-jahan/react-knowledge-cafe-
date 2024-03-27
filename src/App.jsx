import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);
  
const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog ]
    setBookmarks(newBookmarks)
  }

const handleMakeAsRead = (id, time) =>{
  const newTime = readingTime + time;
  setReadingTime(newTime);
  // console.log('sdjfsjdfd', id)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}


  return (
    <div className='container mx-auto'>

      <Header></Header>

      <div className='md:flex'>
        <Blogs handleMakeAsRead={handleMakeAsRead} handleAddToBookmark ={handleAddToBookmark} ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
      </div>


    </div>
  )
}

export default App
