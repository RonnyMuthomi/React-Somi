//import { useState } from "react"

import './Styles/LoginModal.css'
export default function LoginModal() {
    //const [closemodal]=useState(false);
  return (
    <>
      <form>
      <input type="email" placeholder="Email address" id="email2" required/><br/>
      <input type="password" placeholder="password" id="pass3" required/><br/>
      <p id="check3"><input type="checkbox"/>Remember me <a href="#" id="for">forgot password?</a></p>
      
      <input type="submit" value="LOGIN" id="loginbtn"/><br />
      <p id="account2">Do not have an account? <a href="#" id='SiGN'>Sign up</a></p>

      {/*<button onClick={()=>closemodal(false)}></button>*/}
                    
      </form>
    </>
  );
}
