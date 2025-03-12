// import React from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// // Step-1 : Design the form
// // Step-2 : Create state for form data with initial value as "" {empty string}
// // Step-3 : Create a submitHandler function to prevent the default action of form and empty the form data
// // Step-4 : Add onChange event to each input field and update the form data using setForm function
// // Step-5 : Add value attribute to each input field to bind the form data

// const App = () => {
//   const [form, setForm] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: ""
//   });

//   const [showPassword, setShowPassword] = React.useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(form);
//     setForm({ name: "", email: "", password: "", gender: "" }); // Reset form
//   };

//   return (
//     <div className='py-16'>
//       <form className='w-1/3 mx-auto border border-slate-400 p-4' onSubmit={submitHandler}>
//         <div className='flex flex-col space-y-3'>
//           <div className='w-full'>
//             <label htmlFor="name" className='text-sm'>Name</label>
//             <input
//               name='name'
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               value={form.name}
//               id='name'
//               className='p-2 border-0 bg-slate-200 w-full rounded-lg'
//               placeholder='Enter name'
//               type="text"
//             />
//           </div>

//           <div className='w-full'>
//             <label htmlFor="email" className='text-sm'>Email</label>
//             <input
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               name='email'
//               id='email'
//               className='p-2 border-0 bg-slate-200 w-full rounded-lg'
//               placeholder='Enter Email'
//               type="email"
//             />
//           </div>

//           <div className='w-full relative'>
//             <label htmlFor="password" className='text-sm'>Password</label>
//             <input
//               id='password'
//               onChange={(e) => {setForm({ ...form, password: e.target.value})
//               console.log(e.target.value) }}
//               name='password'
//               value={form.password}
//               className='p-2 border-0 bg-slate-200 w-full rounded-lg'
//               placeholder='Enter Password'
//               type={showPassword ? "text" : "password"}
//             />
//             {showPassword ? (
//               <FaRegEye
//                 onClick={() => setShowPassword(false)}
//                 size={18}
//                 color='black'
//                 className='absolute bottom-3 z-10 right-4 cursor-pointer'
//               />
//             ) : (
//               <FaRegEyeSlash
//                 onClick={() => setShowPassword(true)}
//                 size={18}
//                 color='black'
//                 className='absolute z-10 bottom-3 right-4 cursor-pointer'
//               />
//             )}
//           </div>

//           <div className='w-full'>
//             <label htmlFor="gender" className='text-sm'>Gender</label>
//             <select
//               className='w-full p-2 bg-slate-200'
//               name="gender"
//               id="gender"
//               onChange={(e) => setForm({ ...form, gender: e.target.value })}
//               value={form.gender}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className='w-full my-5'>
//             <button
//               type="submit"
//               className='w-full hover:bg-yellow-500 bg-yellow-400 p-2 rounded-lg text-white'
//             >
//               Submit Form
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;

// import React, {useEffect, useState} from 'react'

// const App = () => {
//   const [val, setVal] = useState(0);
//   const [name, setName] = useState('')

//   // useEffect(()=>{
//   //   console.log('useEffect called');
//   // })// calls the function whenever the state changes or the component re-renders

//   // useEffect(()=>{
//   //     console.log('useEffect called');
//   //  },[val])// calls the function whenever the state changes or the component re-renders

//   useEffect(()=>{
//       console.log('useEffect called');
//     },[]) // calls the function only once when the component is mounted
//   return (
//     <div>
//       <div className='max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center'>
//         <h1 className='text-5xl font-bold text-center'>Value: {val}</h1>
//         <div>
//             <div className='flex gap-x-7 items-center justify-around mt-9'>
//                 <button className='bg-green-500 px-3 py-2 text-white font-medium' onClick={()=>setVal(val+1)}>Increment</button>
//                 <button className='bg-red-500 px-3 py-2 text-white font-medium' onClick={()=>setVal(val-1)}>Increment</button>
//             </div>
//         </div>
//       </div>
//       <div className='max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center'>
//         <h1 className='text-5xl font-bold text-center'>Name: {name}</h1>
//         <div>
//             <div className='flex gap-x-7 items-center justify-around mt-9'>
//               <input type="text" className='p-3 border border-slate-600 bg-slate-100' value={name} onChange={(e)=>setName(e.target.value)} />
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect} from "react";
// import Loader from "./components/Loader/Loader";
// import axios from 'axios';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [count, setCount] =useState(6);

//   async function fetchProducts() {
//     try{

//       // setLoading(true);
//       // const response = await fetch(`https://dummyjson.com/products?limit=${count}`);
//       const response = await axios.get(`https://dummyjson.com/products?limit=${count}`);
//       setProducts(response.data.products);
//       setLoading(false);
//     } 
//     catch(e){
//       console.log(e);
//       setLoading(false);
//     }
    
//   }
//   // axios

//   useEffect(() =>{fetchProducts()}, [count]);


//   // console.log(products);
//   return (
//     <div>
//       <div className="flex justify-around flex-wrap">
//       {loading ? (
//     <Loader />
//   ) : (
//     products.map((product, index) => 
//       <div
//         key={index}
//         className="max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center"
//       >
//         <h1 className="text-5xl font-bold text-center">{product.name}</h1>
//         <div className="flex gap-x-7 items-center justify-around mt-9">
//           <img
//             src={product.thumbnail}
//             alt={product.name}
//             className="w-1/3 h-1/3 object-cover"
//           />
//           <p className="text-lg font-medium">{product.description}</p>
//           <p className="text-lg font-medium">${product.price}</p>
//         </div>
//       </div>
//     )
//   )}
//       </div>
//   {
//     loading?<div></div>:<button onClick={()=>setCount(count+4)} className="w-2xl block mx-auto p-4 text-center bg-blue-500 text-lg font-bold text-white my-6 rounded-md">SHOW MORE</button>
//   }
//     </div>
//   );
    
  
// };

// export default App;






import React from "react"
import {Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./components/global/Navbar/Navbar"
import Home from "../../practice1/src/pages/Home"
import About from "../../practice1/src/pages/About"
import Contact from "../../practice1/src/pages/Contact"
import NotFound from "../../practice1/src/pages/NotFound"
import AdminNav from "./components/global/AdminNav/AdminNAv"
import AdminLogin from "../../practice1/src/pages/AdminLogin"


// step 1
const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <footer className="bg-black p-5 text-center text-white py-7">Footer here</footer>
    </>
  )
}

const AdminLayout = ()=>{
  return(
    <>
      <AdminNav/>
      <div>
        <Outlet/>
      </div>
      <footer className="bg-black py-7 px-4 text-center text-white text-xl">Admin FOOTER</footer>
    </>
  )
}


// Step-2
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/about-page',
        element: <About/>
      },
      {
        path: '/contact-page',
        element: <Contact/>
      },
      {
        path: "*",
        element: <NotFound/>
      },
      {
        path: '/admin-login',
        element: <AdminLogin user={false}/>
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout/>,
    children:[
      {
        path: '/admin',
        element: <div className="h-screen bg-pink-800 text-white text-5xl text-center flex justify-between items-center">Admin Dashbaord</div>
      },
      {
        path: '/admin/sales',
        element: <div className="h-screen bg-blue-800 text-white text-5xl text-center flex justify-between items-center">Admin Sales</div>
      },
      {
        path: '/admin/statistics',
        element: <div className="h-screen bg-purple-600 text-white text-5xl text-center flex justify-between items-center">Admin Statistics</div>
      },
      {
        path: '/admin/profile',
        element: <div className="h-screen bg-cyan-700 text-white text-5xl text-center flex justify-between items-center">Admin Profile</div>
      }
    ]
  }
  
])


// step-3
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App