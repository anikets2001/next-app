"use client";
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
  };

  return (
    <div className="login-wrapper">
      <button onClick={() => handleNavigate("/users")}>Users</button>
      <button onClick={() => handleNavigate("login/loginStudent/1234")}>
        Student Login
      </button>
      <button onClick={() => handleNavigate("login/loginTeacher/1234")}>
        Teacher Login
      </button>
    </div>
  );
};

export default Login;
