import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    }

  return (
    // <main>
    //   <h1>AuthPage</h1>
    //   <SignUpForm setUser={setUser} />
    //   <LoginForm setUser={setUser} />
    // </main>
    <main>
    <h1>AuthPage</h1>
    {showLoginForm ? (
      <>
        <LoginForm setUser={setUser} />
        <p>
          <button onClick={toggleForm}>Sign Up</button >
        </p>
      </>
    ) : (
      <>
        <SignUpForm setUser={setUser} />
        <p>
          <button  onClick={toggleForm}>Login</button>
        </p>
      </>
    )}
  </main>
  );
}