import { signIn } from "next-auth/react";
import styles from "./Login.module.scss";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username } = user;

    signIn('credentials', {...user, redirect:false})
  };

  const handleGoogleSignIN = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  const handleGithubSignIN = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.title}>Login</h1>
      </div>
      <br />
      <div className={styles.sign}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className={styles.form_button}>Sign In</button>
        </form>
      </div>
      <div className={styles.social}>
        <button onClick={handleGoogleSignIN}>SignUp with Google</button>
        <button onClick={handleGithubSignIN}>SignUp with Github</button>
      </div>
    </div>
  );
};
export default Login;
