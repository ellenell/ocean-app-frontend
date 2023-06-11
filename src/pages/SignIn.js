import React, { useState } from 'react';
import PropTypes from "prop-types";
import backgroundImage from '../images/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg';
import '../fonts/fonts.css';

const inputStyle = {
  marginBottom: "10px",
  padding: "5px",
  width: "70%",
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  textAlign: "left", 
  verticalAlign: "top", 
  fontFamily: 'oceanName',
  
};

const borderCreate = {
  width: 'fit-content', 
  margin: '0 auto', 
  padding: '5px', 
  boxSizing: 'content-box', 
  border: '3px solid rgba(0, 0, 0)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

const descriptionStyle = {
  marginBottom: "10px",
  width: "50%",
  height: '70px',
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  verticalAlign: "top", 
};

const selectStyle = {
  marginBottom: "10px",
  padding: "5px",
  width: "51%",
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  verticalAlign: "top", 
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '5px 5px',
  fontSize: '20px',
  marginBottom: '50px',
  display: 'inline-block',
  width: '225px',
  textAlign: 'center',
  margin: '10px',
  transition: 'transform 0.3s',
  textShadow: '1px 5px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
  fontFamily: 'oceanName',

};

const h1Style = {
  color: 'white',
  fontSize: '50px',
  fontWeight: 'bold',
  marginTop: '40px',
  marginBottom: '20px',
  textDecoration: 'none',
  textShadow: '1px 3px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
  marginLeft: '50px',
  marginRight: '50px',
  fontFamily: 'oceanName',
}

const mainDiv = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // padding: '5px',
  color: 'white',
  fontFamily: 'oceanName',
};
const SignIn = ({ setToken, URL }) => {
  SignIn.propTypes = {
    // this is where you define your props
    setToken: PropTypes.func.isRequired, // setToken is a function that is required
  };

  //
  async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      
    }).then((data) => data.json());
  }

 

  //
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //
  const handleSubmit = async (e) => {
    //console.log(e);
    e.preventDefault();
    try {
      const token = await loginUser({
        email,
        password,
      });
      setToken(token);
    } catch (e) {
      console.log(e);
    }
  };

  //verification
  console.log(email);
  console.log(password);

  return (
    <div style={mainDiv}>
    <div style={borderCreate}>
      <h1 style={h1Style}>Sign-In</h1>
      <form className="register" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        /> <br></br> <br></br>
        <input
          type="password"
          name="password"
          style={inputStyle}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /> <br></br> <br></br>
        <button style={buttonStyle} type="submit" className="button-register">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;