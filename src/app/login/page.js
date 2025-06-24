"use client";
import { API_URL } from "@/config/constants";
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
  };

  return (
    <div className="login-wrapper">
      <h1>
        You are in {process.env.NODE_ENV} mode: ({API_URL})
      </h1>
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
