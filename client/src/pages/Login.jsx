import React from "react";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  async function handleLogin() {
    try {
      const res = await axios.post(
        "https://doubtly-backend.onrender.com/api/auth/signin",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login response data:", res.data);
     
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      
       if (err.status === 400) {
         toast.error(err.response.data.message);
        //  console.log(err.response.data.message);
       }
    }
  }
  return (
    <>
      <NavBar
        doubtly={true}
        searchBar={false}
        notification={false}
        profile={false}
      />
      <div className="flex flex-col items-center justify-center min-h-screen gap-2 bg-primary dark:text-black">
        <div className="border-2 flex flex-col w-[360px] px-10 py-10 rounded-lg bg-[#e6f2ff]">
          <h1 className="text-center text-3xl font-bold mb-2">LOG IN</h1>
          <label htmlFor="Email" className="text-lg font-semibold mt-5 ml-1">
            Email
          </label>
          <input type="email" className="p-2 rounded-md" ref={emailRef} />
          <label htmlFor="Password" className="text-lg font-semibold mt-5 ml-1">
            Password
          </label>
          <input type="password" className="p-2 rounded-md" ref={passwordRef} />

          <div className="mt-8 mx-auto">
            <Button color="blue" size="3" radius="large" onClick={handleLogin}>
              Login
            </Button>
          </div>

          <div className="mx-auto text-sm font-semibold mt-10">
            <span>
              Not a user?{" "}
              <a href="/signup" className="text-[blue] underline">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
