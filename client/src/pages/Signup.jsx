import React from "react";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  async function handleSignup() {
    try {
      const res = await axios.post(
        "https://doubtly-backend.onrender.com/api/auth/signup",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("Account created successsfully!")
        navigate("/login");
        
      }
    } catch (err) {
      if(err.status==400){
        toast.error(err.response.data.message)
      }
      console.log(err);
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
          <h1 className="text-center text-3xl font-bold mb-2">SIGN UP</h1>
          <label htmlFor="Name" className="text-xl font-semibold mt-5 ml-1">
            Name
          </label>
          <input type="text" className="p-2 rounded-md" ref={nameRef} />
          <label htmlFor="Email" className="text-lg font-semibold mt-5 ml-1">
            Email
          </label>
          <input type="email" className="p-2 rounded-md" ref={emailRef} />
          <label htmlFor="Password" className="text-lg font-semibold mt-5 ml-1">
            Password
          </label>
          <input type="password" className="p-2 rounded-md" ref={passwordRef} />

          <div className="mt-8 mx-auto">
            <Button color="blue" size="3" radius="large" onClick={handleSignup}>
              Signup
            </Button>
          </div>

          <div className="mx-auto text-sm font-semibold mt-10">
            <span>
              Already a user?{" "}
              <a href="/login" className="text-[blue] underline">
                Log In
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
