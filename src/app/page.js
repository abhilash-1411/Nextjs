import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      {/* --Video1--  */}
      <User name="Abhilash"/>
      <User name="Aakash"/>
      <User name="Sachin"/>
      <User name="Anil"/>
    </main>
  );
}
 const User=(props)=>{
 return(
  <div>
    Username is {props.name}
  </div>
 )
}
