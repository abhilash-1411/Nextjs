'use client'
import Link from "next/link";
import {useRouter }from "next/navigation";
 const Login=()=>{
    const router = useRouter()
    return (
        <div>
            <h1>Login page</h1>
            <Link href="/">GO to Home Page</Link>
            <br />
            <br />
            <button onClick={()=>router.push('/login/loginstudent')}>GO to login student page</button>
            <br/>
            <br />
            <button onClick={()=>router.push('/login/loginteacher')}>GO to login teacher page</button>
        </div>
    )
}
export default Login;