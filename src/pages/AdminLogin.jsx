import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {

    const navigate = useNavigate();
    const user = props.user;
    const handleClick=(e)=>{
        e.preventDefault();
        if(user){
            navigate('/admin')
        }
        else{
            navigate('/admin-login')
        }
    }

  return (
    <div>
      <form action="" className="h-screen bg-white flex justify-center items-center">
        <div className="flex p-5 px-10 flex-col gap-y-5 w-1/2 h-max rounded-md border border-slate-300 items-center">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="p-2 border-2 w-full bg-slate-200 border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 w-full bg-slate-200 border-gray-300 rounded-md"
          />
          <button onClick={handleClick} className="bg-blue-500 px-4 hover:bg-blue-600 text-white p-2 rounded-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
