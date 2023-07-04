export default function PostForm(props) {
    var {title,myName}=props;
    return(
        <div>
        <form>
            <label>Title:
                {/* <input type='text' onChange={(e)=>{setCatName(e.target.value)}} name='catName' value={catName}></input> */}
                <input type='text' onChange={()=>{}} name='title' value={title}></input>
            </label><br/>
            <label>Name: 
                {/* <input type='text' onChange={(e)=>{setNewLatinName(e.target.value)}} name='latinName' value={newLatinName}></input> */}
              <input type='text' onChange={()=>{}} name='myName' value={myName}></input>
            </label><br/>
            <label>
                Edit your Post:<br/>
                <textarea name='text' rows={4} cols={40} defaultValue="Make your Post Here"/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
        </div>
    )
}
