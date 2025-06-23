"use client";
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(`/login${route}`);
  };

  return (
    <div className="login-wrapper">
      <button onClick={() => handleNavigate("/loginStudent/1234")}>
        Student Login
      </button>
      <button onClick={() => handleNavigate("/loginTeacher/1234")}>
        Teacher Login
      </button>
    </div>
  );
};

export default Login;
