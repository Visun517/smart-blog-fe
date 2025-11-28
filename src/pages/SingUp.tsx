import { useState, type FormEvent } from "react";
import { signUp } from "../services/auth";
import { useNavigate } from "react-router-dom";

function singUp() {

  const navigate = useNavigate();

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const handleSignIn = async(e : FormEvent) => {
    e.preventDefault();

    console.log(username, email, password)

    if( username === '' || email === '' || password === '' ) return;

    try {
      const user = { username , email, password };
      const res : any = await signUp(user)

      console.log(res)

      alert('User registration successful..!');
      navigate('/auth/login');
      
    } catch (error) {
      console.log(error)
      alert("Registration failed. Please try again.");
    }
  };


  return (
    <div>
      {/* image login section */}
      <div>

      </div>
      {/* login form section */}
      <div>
         <form>
            <div>
               <label>Username</label>
               <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
               <label>Email</label>
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
               <label>Password</label>
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type ="submit" onClick={handleSignIn}>Sign Up</button>
         </form>
      </div>
    </div>
  );
}

export default singUp;
