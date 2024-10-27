import './User.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData } from '../GlobalStates/UserSlice';

function Login() {
  const {loginData}=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleInput=(event)=>{ 
    dispatch(setLoginData({...loginData,[event.target.name]:event.target.value}))
    console.log(loginData);
  }

  const handleLogin=()=>{
    axios.post(`${process.env.REACT_APP_API_URL}/user/login`, loginData).then((res)=>{
      localStorage.setItem('token',res.data.token);
      navigate('/home')
    })
    .catch((err)=>{
      alert('something went wrong')
    })
  }

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='form-box'>
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" name='username' placeholder='Username' onChange={handleInput} value={loginData.username} />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" name='password' placeholder='Password' onChange={handleInput} value={loginData.password} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button  className='enter-button' onClick={handleLogin}>Login</button>

          <div className="login-link"><p>Don't have an account? <Link to='/signup'>Register</Link></p></div>
        </div>
      </div>
    </div>
  )
}

export default Login