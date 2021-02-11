import React from "react";

// This is one way to do 

/* let isLoggedIn = false

function renderConditionally(){
    if(isLoggedIn === true){
        return  <h1>Hello</h1>
    } else{
        return <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    }
}
function App() {
  return (
    <div className="container">
     {renderConditionally()}
    </div>
  );
} */

// Another simple way using react 

// Ternary Operator (expressions)
// CONDITION ? DO IF ITS TRUE : DO IF ITS FALSE
// isCloudy === true ? bringUmbrella() : bringSunscreen()


/* import Login from './Login'
// let isLoggedIn = false;

const currentTime = new Date(2021, 2, 11, 18).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container"> {
       // Ternary Operator
       // isLoggedIn ?  <h1>Hello</h1> : <Login />
       // currentTime > 12 ? <h1> Why are you still working ? </h1> : null 

                     // or

      // && AND Operator
      // Condition && Expression
      currentTime > 12 && <h1> Why are you still working ? </h1>
    }</div>
  );
}

export default App; */

import Form from "./Form"

let userIsRegistered = false;

function App(){
    return (
        <div className = "container">
            <Form isRegistered = {userIsRegistered} />
        </div>
    );
}

export default App;
