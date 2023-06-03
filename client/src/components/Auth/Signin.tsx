import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Signin() {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const viewPassword = () => {
    if (!ref.current) {
      return;
    }
    const type = ref.current.type;
    if (type === "password") {
      ref.current.type = "text";
      setShowPassword(true);
    } else {
      ref.current.type = "password";
      setShowPassword(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = await login({ email, password });
    console.log(err);
  };

  return (
    <div className="w-full  flex  justify-center bg-gradient-to-r from-neutral-800 to-neutral-900 p-8">
      <div className="w-full max-w-3xl  bg-black rounded-xl text-white p-2 sm:p-20">
        <h1 className="text-center font-bold text-2xl sm:text-5xl mt-10 sm:mt-0 mb-10">
          Sign in to Soundify
        </h1>
        <hr className="w-full  border-t-2 border-t-orange-200 my-16" />

        <form
          className="flex flex-col shrink w-full items-center space-y-7 px-4 sm:p-0"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col w-full sm:w-1/2 flex-1 space-y-2">
            <label htmlFor="email" className="text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full text-white text-base font-semibold p-2 rounded-md outline-none border-none appearance-none  bg-[#121212] hover:outline-1 hover:outline-teal-50 shadow-slate-300/40 focus:border-5 focus:border-white"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 flex-1 space-y-2">
            <label htmlFor="password" className="text-xl font-bold">
              Password
            </label>
            <div className="relative">
              <input
                ref={ref}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full text-white text-base font-semibold p-2 rounded-md outline-none border-none appearance-none  bg-[#121212] hover:outline-1 hover:outline-teal-50 shadow-slate-300/40 focus:border-5 focus:border-white"
              />
              <div className="h-full w-fit flex items-center absolute top-0 bottom-0 right-0  pe-5">
                <button
                  onClick={viewPassword}
                  type="button"
                  className="bg-transparent text-white
                  border-none hover:scale-110"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <button
              type="submit"
              className="border-none rounded-full bg-ctc p-3 text-lg font-bold w-full  hover:scale-110"
            >
              Sign In
            </button>
          </div>
          <div className="text-sm">
            <Link
              to="/forgotpassword"
              component={RouterNavLink}
              className="text-white underline hover:text-ctc"
            >
              <span>Forgot Your Password?</span>
            </Link>
          </div>
        </form>

        <hr className="w-full  border-t-2 border-t-orange-200 my-16" />
        <div className="text-sm w-full text-center">
          <span>Don't have an account? </span>
          <Link
            to="/signup"
            component={RouterNavLink}
            className="text-white  hover:text-ctc"
          >
            <span>Sign up for Soundify</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
