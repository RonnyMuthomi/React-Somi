
import './Styles/Modals.css'
export default function Modals() {

  return (
    <div>
    <form>
      <input type="text" name="firstname" placeholder="First Name" id='firstname' required />
      <input type="text" name="lastname" placeholder="Last Name" id='lastname' required/><br />
      <input type="email" name="email" placeholder="Enter Email Address" id='email' required /><br />
      <input type="number" name="phone" placeholder="Phone" id='phone' required/><br />
      <input type="password" name="password" placeholder="Password" id='pass' required/><br />
      <input type="password" name="password" placeholder="Confirm Password" id='pass2' required/>
      <p><input type="checkbox" id='check' /><p>I have read and accept the<a href="#" id='terms'>Terms and privacy policy</a></p>  </p>
      <input type="submit" value="Sign up" id="signbtn"/><br/>
      <p id="account">Already have an account? <a href="#" id="LG">Login</a></p><br/>
    </form>
    </div>
  )
}
