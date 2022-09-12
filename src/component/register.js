import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {

  const [isPending, setPending] = useState(false)
  const registerUser = (e) => {
    e.preventDefault()
    const registerForm = document.querySelector(".registerform");
    const savecart = []

    const data = {
      username: registerForm.firstname.value,
      email: registerForm.email.value,
      password: registerForm.password.value,
      cart: savecart,
      order: []
    };

    console.log(data)

    setPending(true)



   

    fetch("http://localhost:9000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setTimeout(() => {
        document.querySelector(".message").style.background = "green"
        document.querySelector(".message").textContent = "Registered Successfully"
        setPending(false)

      }, 3000)
    }).then(() => {
      setTimeout(() => {
        registerForm.reset();
        navigate("/welcome/login")
      }, 5000)
    })

  
  };

  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col h-full justify-center items-center register">
      <h1 className="font-bod text-3xl mb-10">Welcome to Lillies</h1>
      <form
        onSubmit={registerUser}
        className="flex flex-col justify-center items-center gap-5 registerform"
        action=""
      >
        <div className="w-full message p-4 rounded-sm text-white text-center font-bold"> </div>
        <input name="firstname" type="text" placeholder="Your First Name" />
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
          value={isPending ? "LOADING" : "REGISTER"}
        />

        <h2>
          Already a user ?{" "}
          <span onClick={() => navigate("/welcome/login")}>LOGIN</span>
        </h2>
      </form>
    </div>
  );
}

export default Register;
