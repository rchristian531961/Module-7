import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostCard from './Components/PostCard'
import postData from './Components/PostData'
import PostForm from './Components/Postform'



function App() {
  const [myPosts, setMyPosts] = useState(postData)
  console.log(myPosts)

  var postDisplay=myPosts.map(curPost=>
    <PostCard
    key={curPost.id}
    name={curPost.name}
    title={curPost.title}
    text={curPost.text}
    />
    )


  return (
    <>
      <h1>Blog Post</h1>
      {<PostForm/>}
      {postDisplay}
    </>
  )
}

export default App
