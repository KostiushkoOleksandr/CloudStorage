import React, { useState } from "react";
import "./authorization.css";
import Input from "../../utils/input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    
    <body>
      
      <div class="ribbon"></div>
      <div className="authorization">
        <h1>Sign in</h1>
        <p>Glad to see you again</p>
        <div class="input">
          <Input
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Email"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="authorization__btn"
          onClick={() => dispatch(login(email, password))}
        >
          Sign in
        </button>
      </div>
    </body>
  );
};

export default Login;
