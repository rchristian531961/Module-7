export default function PostForm(props) {
    var {handleSubmit,handleText,handleTitle, handleName,title,myName,myText}=props;
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Title:
                {/* <input type='text' onChange={(e)=>{setCatName(e.target.value)}} name='catName' value={catName}></input> */}
                <input type='text' onChange={(e)=>{handleTitle(e.target.value)}} name='title' value={title}></input>
            </label><br/>
            <label>Name: 
                {/* <input type='text' onChange={(e)=>{setNewLatinName(e.target.value)}} name='latinName' value={newLatinName}></input> */}
              <input type='text' onChange={(e)=>{handleName(e.target.value)}} name='myName' value={myName}></input>
            </label><br/>
            <label>
                Edit your Post:<br/>
                <textarea onChange={(e)=>{handleText(e.target.value)}} name='text' rows={4} cols={40} defaultValue="Make your Post Here"/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
        </div>
    )
}
