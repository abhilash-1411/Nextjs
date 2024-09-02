"use client"
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [name,setName]=useState("Abhilash")
  const apple=(item)=>{
    // alert(item);
    setName(item)
  }
  const Innercomponent=()=>{
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      {/* --Video1--  */}
      {/* <h1>Home Page</h1> */}
      {/* <User name="Abhilash"/>
      <User name="Aakash"/>
      <User name="Sachin"/>
      <User name="Anil"/> */}
      <h1>Events,functions and state {name}</h1>
       <button onClick={()=>apple("Anil")}>Click Me</button>
       {/* <Innercomponent/> */}
       {/* call component as function  */}
       {Innercomponent()}
    </main>
  );
}


//  const User=(props)=>{
//  return(
//   <div>
//     Username is {props.name}
//   </div>
//  )
// }
