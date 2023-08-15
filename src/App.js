import React from "react";
import "./style.css";
import User from "./User.jsx"

export default function App() {
  function parentAlert(item){
    alert(item)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
     <User alert={parentAlert}/>
    </div>
  );
}
