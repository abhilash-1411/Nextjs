"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const About=()=>{
    const router=useRouter()
    return (
        <div>
            <h1>About page</h1>
            <button onClick={()=>router.push("/")}>Go to Home Page</button>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">Go to about student page</Link>
            <br/>
            <br/>
            <Link href="/about/aboutcollege">Go to about college page</Link>
        </div>

    )
}
export default About;