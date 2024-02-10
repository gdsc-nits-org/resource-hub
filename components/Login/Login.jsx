import {useSession,signIn,signOut} from 'next-auth/react'
const Login =()=>{

    const handleGoogleSignIN = async () =>{
        signIn('google',{callbackUrl:"http://localhost:3000/"})
    }
    const handleGithubSignIN = async () =>{
        signIn('github',{callbackUrl:"http://localhost:3000/"})
    }


    return(
        <>
        <h1>Sign in</h1>
        <button onClick={handleGithubSignIN}>github</button>
        <button onClick={handleGoogleSignIN}>google</button>
        </>
    )
}
export default Login;