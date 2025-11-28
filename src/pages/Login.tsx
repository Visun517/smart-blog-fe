import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getMyDetials, logIn } from "../services/auth";
import { useAuth } from "../Context/authContext";

function login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    if (email === "" || password === "") return;

    try {
      const user = { email, password };
      const res: any = await logIn(user);

      const accessToken = res.data.data.accessToken;
      console.log(accessToken);

    
        localStorage.setItem("accessToken", accessToken);

        const details = await getMyDetials();
        setUser(details.data);
      

      alert("User login successful..!");
      navigate("/app/dashboard");
    } catch (error) {
      console.log(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div>
      {/* image login section */}
      <div></div>
      {/* login form section */}
      <div>
        <form>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleLogIn}>
            Login Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
