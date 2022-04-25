import React, {useState} from "react";
import styled from "styled-components";

const LoginPage = () => {

  const [userExists, setUserExists] = useState(true)
  const [postUser, setPostUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  })
  

  //sign or login functions
  const singUpSubmitForm = (e) => {
    e.preventDefault();
    
    let url = 'http:localhost/PLACEHOLDER'

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: postUser.name,
        email: postUser.email,
        username: postUser.username,
        password: postUser.password
      })
    })

  }

  const loginSubmitForm =(e) => {
    e.preventDefault();
    //check if user exists
    //log user in 
  }


  //siwtches between login and sign up 
  const signMeUp = () => {
    setUserExists(false)
  }

  const logMeIn = () => {
    setUserExists(true)
  }


  return (
    <Wrapper>
      <section className="bg-gradient">
          {userExists ? (
          <div className="login-container">
              <form onSubmit={loginSubmitForm}>
                <h1 className="login">Welcome to Forum</h1>
                <input type="text" className="username" placeholder="Username"/>
                <input type="password" className="password" placeholder="Password"/>
                <button className="signIn" type="submit">Sign In</button>
              </form>
              <p className="signUp" onClick={signMeUp}>Not a member? Sign up</p>
          </div>
          ) : (
            <div className="login-container">
              <form onSubmit={singUpSubmitForm}>
                <h1 className="login">Sign me up today</h1>
                <input type="text" className="name" placeholder="Name"/>
                <input type="email" className="email" placeholder="Email"/>
                <input type="text" className="username" placeholder="Username"/>
                <input type="password" className="password" placeholder="Password"/>
                <input type="password" className="password" placeholder="Confirm Password"/>
                <button className="signIn" type="submit">Sign up</button>
              </form>
              <p className="signUp" onClick={logMeIn}>Im already a member</p>
          </div>
          )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.signUp {
  margin-top: 2%;
  padding: 8px;
  text-decoration:underline;
  color: gray;
  cursor: pointer;
}
.signUp:hover {
  font-weight: bold;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signIn:hover {
  transition: all 1s;
  color: black;
  background: white;

}
.signIn {
  transition: all 1s;
  color: white;
  width: 300px;
  font-size: 20px;
  border-radius: 20px;
  background: rgb(4,81,255);
  background: linear-gradient(90deg, rgba(4,81,255,1) 0%, rgba(229,147,214,1) 100%);
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}

.login {
  font-size:30px;
  margin-bottom: 6%; 
}

.bg-gradient {
  background: rgb(4,81,255);
  background: linear-gradient(90deg, rgba(4,81,255,1) 0%, rgba(229,147,214,1) 100%);
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  border-radius: 20px;
  background-color: white;
  margin-top: 30%;
  margin-bottom: 30%;
  width: 300px;
  padding: 30px;
}

input {
  width:280px;
  border-radius: 20px;
  padding: 8px;
  font-size: 18px;
}
.username {
  margin-top: 5%;
  margin-bottom: 20px;
}
.name {
  margin-top: 5%;
  margin-bottom: 20px;
}
.email {
  
}
.password {
  margin-bottom: 5%;
}

`

export default LoginPage;