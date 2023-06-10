// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import '../fonts/fonts.css';


// const SignIn = ({ setToken, URL }) => {
//   SignIn.propTypes = {
//     // this is where you define your props
//     setToken: PropTypes.func.isRequired, // setToken is a function that is required
//   };

//   //
//   async function loginUser(credentials) {
//     console.log(credentials)
//     return fetch('http://localhost:4000/login', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
      
//     }).then((data) => data.json());
//   }

 

//   //
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   //
//   const handleSubmit = async (e) => {
//     //console.log(e);
//     e.preventDefault();
//     try {
//       const token = await loginUser({
//         email,
//         password,
//       });
//       setToken(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   //verification
//   console.log(email);
//   console.log(password);

//   return (
//     <div className="signindiv">
//       <h1 className="h1signin">Please Sign In</h1>
//       <form className="register" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         /> <br></br> <br></br>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         /> <br></br> <br></br>
//         <button type="submit" className="button-register">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;