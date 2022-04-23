import React from "react";
import styled from "styled-components";

const LoginPage = () => {

  return (
    <Wrapper>
      <section className="bg-gradient">
          <div className="login-container">
              <form action="">
                <input type="text" className="username" placeholder="Username"/>
                <input type="text" className="password" placeholder="Password"/>
              </form>
            
          </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.bg-gradient {
  background: rgb(4,81,255);
  background: linear-gradient(90deg, rgba(4,81,255,1) 0%, rgba(229,147,214,1) 100%);
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  border-radius: 20px;
  background-color: white;
  margin-top: 250px;
  margin-bottom: 300px;
  width: 300px;
  display:flex;
  flex-direction: column;
  padding: 30px;
}

input {
  border-radius: 20px;
  padding: 4px ;
  font-size: 20px;
}
.username {
margin-top: 15%;
margin-bottom: 20px;
}

.password {
margin-bottom: 15%;
}

`

export default LoginPage;