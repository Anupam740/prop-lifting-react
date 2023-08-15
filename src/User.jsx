import React from 'react'
function User(props){
  
  return(
    <div>
    <h1>name</h1>
    <button onClick={()=>props.alert("sonu")}>click to get name</button>
    </div>
  )
}
export default User;