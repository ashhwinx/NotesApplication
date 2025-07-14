import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()
    const userData = {
      email,
      password
    }
    console.log(userData)
  }


  return (
    <div className="min-h-screen bg-purple-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-purple-900 p-6 sm:p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-6">
          Welcome Back
        </h2>

        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={e=>setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-purple-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={e=>setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-purple-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-purple-400">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-purple-200 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
