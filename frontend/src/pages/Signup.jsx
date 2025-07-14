// pages/Signup.jsx
import React , {useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e)=>{
      e.preventDefault()
      const userData = {
        fullName,
        email,
        password
      }
      console.log(userData)

    
      
    }



  return (
    <div className="flex items-center justify-center h-screen bg-purple-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-purple-900 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-300 mb-6">Sign Up</h2>
        <form
        onSubmit={(e)=>{submitHandler(e)}}
         className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            onChange={e=>setFullName(e.target.value)}
            
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={e=>setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <p className="text-purple-400 text-sm mt-4 text-center">
          Already have an account?{' '}
          <Link to="/" className="text-purple-200 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
