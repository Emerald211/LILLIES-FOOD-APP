import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [users, setusers] = useState([]);

    let navigate = useNavigate();
    const [pending, setPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch("https://lillies-food-app-backend.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setusers(data);
      });
  }, []);

  const loginUser = (e) => {
    e.preventDefault();

      const loginForm = document.querySelector(".loginform");
      setPending(true)

    const validation = users.filter((eachUser) => {
      return (
        loginForm.email.value === eachUser.email &&
        loginForm.password.value === eachUser.password
      );
    });

    if (validation.length !== 0) {
      validation.map((eachPerson) => {
        if (
          loginForm.email.value === eachPerson.email &&
          loginForm.password.value === eachPerson.password
        ) {
            console.log("correct");
            localStorage.setItem("userid", JSON.stringify(eachPerson.id));
          setTimeout(() => {
              document.querySelector(".login-message").textContent = "Login Succesful";
              document.querySelector(".login-message").style.display = "flex"
            document.querySelector(".login-message").style.background = "green";
          }, 2000);
            setTimeout(() => {
                document.querySelector(".login-message").textContent = ""
                document.querySelector(".login-message").style.display = "none"
                navigate("/dashboard")
                setPending(false)
            },3000)
        }

        return true
      });
    } else {
      console.log("Wrong Info");
      setTimeout(() => {
        document.querySelector(".login-message").textContent = "Incorrect info";
        document.querySelector(".login-message").style.display = "flex"
      document.querySelector(".login-message").style.background = "red";
    }, 2000);
      setTimeout(() => {
          document.querySelector(".login-message").textContent = ""
          document.querySelector(".login-message").style.display = "none"
          setPending(false)
      },3000)
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center login">
      <h1 className="font-bond text-3xl mb-10">Welcome to Lillies</h1>
      <form
        onSubmit={loginUser}
        className="flex flex-col justify-center items-center gap-5 loginform"
        action=""
      >
        <div className="login-message w-full font-bold text-center p-4 text-white rounded-sm"></div>
        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
        />
        <div className="relative w-full">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
          />
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-4 text-2xl top-1/3 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-4 text-2xl top-1/3 cursor-pointer"
            />
          )}
        </div>
        <input
          type="submit"
          className="font-bold btn  hover:bg-slate-500 text-white rounded-sm"
          value={pending ? "LOADING" : "LOGIN"}
        />

        <h2>
          Not a user ?{" "}
          <span onClick={() => navigate("/welcome/register")}>REGISTER</span>
        </h2>
      </form>
    </div>
  );
}

export default Login;
