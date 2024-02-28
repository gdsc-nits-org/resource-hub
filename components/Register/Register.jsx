"use client";
import styles from "./Register.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/register", user)
      .then(() => alert("user registered"), router.push("/"))
      .catch((err) => alert("An error occured" + err));
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
            type="name"
            placeholder="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
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
          <button className={styles.form_button}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
