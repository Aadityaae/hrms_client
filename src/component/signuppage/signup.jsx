import { Link } from "react-router-dom";
import {useState} from "react";

function SignUp() {
  let [signupData, setSignupData] = useState({});
    let handleChange = (e) => {
      let { name, value } = e.target;
      setSignupData({ ...signupData, [name]: value });
    };
    console.log(signupData);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="..."></div>
      <div className="...">
        <div className="card w-100 h-170 border-1 border-black-200 m-auto rounded-md shadow-md/50">
          <h1 className="card-header text-center font-bold text-xl">Sign Up</h1>
          <div className="card-body w-80 h-100 m-auto mt-8">
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <input
                className="w-full border-1 border-black-500 h-8 rounded-md"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                className="w-full border-1 border-black-500 h-8 rounded-md"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="w-full border-1 border-black-500 h-8 rounded-md"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="w-full border-1 border-black-500 h-8 rounded-md"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-blue-500 text-white h-8 rounded-md"
              >
                Sign Up
              </button>
            </div>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
      <div className="..."></div>
    </div>
  );
}

export default SignUp;