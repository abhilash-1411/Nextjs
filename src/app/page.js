'use client'
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter()
  // const [name,setName]=useState("Abhilash")
  // const apple=(item)=>{
  //   // alert(item);
  //   setName(item)
  // }
  // const Innercomponent=()=>{
  //   return (
  //     <h1>Inner Component</h1>
  //   )
  // }
  return (
    <main className>
      {/* --Video1--  */}
      {/* <h1>Home Page</h1> */}
      {/* <User name="Abhilash"/>
      <User name="Aakash"/>
      <User name="Sachin"/>
      <User name="Anil"/> */}
      {/* <h1>Events,functions and state {name}</h1>
       <button onClick={()=>apple("Anil")}>Click Me</button> */}
       {/* <Innercomponent/> */}
       {/* call component as function  */}
       {/* {Innercomponent()}  */}
       <h1>Basic Routing | Make New page</h1>
       <Link href="/login">Go to Login Page</Link>
       <br/>
       <br/>
       <Link href="/about">Go to About Page</Link>
       <br/>
       <br/>
       <button onClick={()=>router.push("/login")}>Go to Login Page</button>
       <br/>
       <br/>
       <button onClick={()=>router.push("/about")}>Go to About Page</button>
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
