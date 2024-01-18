import React from 'react'
import styled from 'styled-components';

const SignUp = () => {
  return (
    <>
    
    <Nav className="login-container">
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h5>Sign Up</h5>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Re-enter Password"/>
        </div>
        <button> Register</button>
        <p className="loginsignup-login">Already Have An Account?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms of use and policy.</p>
        </div>
      </div>
    </div>
</Nav>
</>
  )
}
const Nav = styled.nav`
.login-container{

}
.loginsignup{
  width:100%;
  height: 80vh;
  background: #fff;
  padding-top: 100px;
}

.loginsignup-container{
  width:580px;
  height:600px;
 background-color: rgba(81, 56, 238, 0.4);
  margin: auto;
  padding: 40px 60px;
}

.loginsignup-container h5{
  margin: 20px 0px;
  font-size: 30px;
}
.loginsignup-fields{
  display:flex;
  flex-direction: column;
  gap: 29px;
  margin-top: 30px;
}

.loginsignip-fields input{
  height: 72px;
  width: 100%;
  padding-left: 20px;
  border: 1px solid #c9c9c9;
  outline:none;
  color: #5c5c5c;
  font-size: 18px;

}
.loginsignup-container button{
  width:460px;
  height:72px;
  color: #fff;
  background:#5138ee;
  margin-top: 30px;
  border: none;
  font-size:24px;
  font-weight:500;
  cursor:pointer;
}

.loginsignup-container button:after{
  color: #7844f2;
        background: #fff;
}


.loginsignup-login span{
  color: #5138ee;
  font-weight: 600;
}
.loginsignup-agree{
  display:flex;
  align-items: center;
  margin-top: 25px;
  gap: 20px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
}
`;
export default SignUp
