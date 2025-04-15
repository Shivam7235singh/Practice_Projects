
const handleLogin = ()=>{
    window.open('http://localhost:5000/auth/google', '_self')
}

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <div>
        <button onClick = {handleLogin} className = "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
    </div>
  )
}

export default Login
