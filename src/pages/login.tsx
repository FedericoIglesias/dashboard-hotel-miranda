import { useContext, useEffect, useState } from "react";
import React from "react";
import { LoginContext } from "../context/loginContext";
import styled from "@emotion/styled";
import { SendLogin } from "../types";
import { fetchLogin } from "../components/fetchLogin";

const Myh1 = styled.section`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  & div {
    display: flex;
    box-shadow: 1px 1px 5px gray;
    background-color: white;
    & hr {
      background-color: #000000;
      height: 300px;
      margin: 30px 0;
      width: 2px;
    }
  }
`;

const InputDiv = styled.section`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: "30px";
  background-color: white;

  & input {
    width: 200px;
    margin-bottom: 10px;
    padding: 3px 5px;
    border: 1px solid black;
  }
  & button {
    width: 100px;
    background-color: #e23428;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    :hover {
      background-color: green;
    }
  }
`;

const Travl = styled.section`
  text-align: center;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2 {
    width: 70%;
    margin: auto;
    font-size: 40px;
  }
  & p {
    position: relative;
    left: -150px;
  }
`;

const token = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmNhYmYwN2E0ODRiNTQ3ODEwNjI1NSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY4NDg3NzYzOCwiZXhwIjoxNjg0ODgxMjM4fQ.Qix80X5qO1dqTYb4QERrQv9Q1yT5NMvkXCymRHoSxAY",
    name: "admin",
    email: "Hillary.Durgan@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/47946331"
  
}

export function Login() {
  const [user, setUser] = useState<SendLogin>({
    name: "admin",
    password: "$2b$10$FvsRU2IingA1tao9wH7fduisDOWrfSehnSnRv8hHZoxfdJ6t6GkmO",
  });

  const { dispatchLogin } = useContext<any>(LoginContext);

  const handleLogin = async() => {
    const infoUser = await fetchLogin(user)
    dispatchLogin(infoUser);
  };

  return (
    <>
      <Myh1>
        <div>
          <InputDiv>
            <input
              type="text"
              name="username"
              placeholder="admin"
              onChange={(e) =>
                setUser({ name: e.target.value, password: user.password })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="admin"
              onChange={(e) =>
                setUser({ name: user.name, password: e.target.value })
              }
            />
            <button id="cypress-login" onClick={handleLogin}>
              Login
            </button>
          </InputDiv>
          <hr />
          <Travl>
            <h2>Travl Management System</h2>
            <p>If you want test, try press Login button</p>
          </Travl>
        </div>
      </Myh1>
    </>
  );
}

