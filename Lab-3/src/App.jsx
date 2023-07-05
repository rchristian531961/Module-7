import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostCard from "./Components/PostCard";
import postData from "./Components/PostData";
import PostForm from "./Components/Postform";

function App() {
  const [myPosts, setMyPosts] = useState(postData);
  console.log(myPosts);

  var postDisplay = myPosts.map((curPost) => (
    <PostCard
      key={curPost.id}
      name={curPost.name}
      title={curPost.title}
      text={curPost.text}
    />
  ));

  const [newName,setName]=useState('');
  const [newTitle,setTitle]=useState('');
  const [newText,setMyText]=useState('');

  const addPosts = () => {
    var currentPosts = myPosts;
    var newPosts = { id: myPosts.length+1, name:newName, title: newTitle, text:newText };
    currentPosts.push(newPosts);
    setMyPosts([...myPosts])
  }

  const handleName=(newName)=>{setName(newName)}
  const handleTitle=(newTitle=>{setTitle(newTitle)})
  const handleText=(newText)=>{setMyText(newText)}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(myPosts);
    addPosts()
    console.log(postData)
  };
  return (
    <>
      <h1>Blog Post</h1>
      {<PostForm
      handleSubmit={handleSubmit}
      handleName={handleName}
      handleText={handleText}
      handleTitle={handleTitle}
      title={newTitle}
      myName={newName}
      myText={newText}
       />}
      {postDisplay}
    </>
  );
}

export default App;
