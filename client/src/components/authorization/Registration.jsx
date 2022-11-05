import React, { useState } from "react";
import "./authorization.css";
import Input from "../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <body>
        <div class="ribbon"></div>
      <div className="authorization">
      <h1>Sign up</h1>
        <p>This will be an amazing experience</p>
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
          onClick={() => registration(email, password)}
        >
          Sign up
        </button>
      </div>
    </body>
  );
};

export default Registration;
