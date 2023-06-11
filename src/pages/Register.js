import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg';
import '../fonts/fonts.css';


const inputStyle = {
  marginBottom: "10px",
  padding: "5px",
  width: "60%",
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
  marginBottom: '40px',
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
  marginLeft: '20px',
  marginRight: '20px',
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

function Register({ setToken }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

 async function registerUser (credentials) {
    return fetch('http://localhost:4000/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await registerUser({
        username,
        email,
        password,
      });
      setToken(token);
    } catch (e) {
      console.log(e);
    }
    navigate('/');
  };

  console.log(username);
  console.log(email);
  

 

  return (
    <div style={mainDiv}>
    <div style={borderCreate}>
      <h1 style={h1Style}>Register Below</h1>
      <form onSubmit={handleSubmit} className="form-register">
        <label className='email-register'></label> <br></br>
        <input style={inputStyle} type="email"  name="email" placeholder="Email" onChange={e=> setEmail(e.target.value)} /> <br></br> <br></br>
        <label for="password" className='password-register'></label> <br></br>
        <input style={inputStyle} type="password" name="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}  /> <br></br> <br></br>
        <button style={buttonStyle} className="button-register">Submit</button>
      </form>
    </div>
  </div>

  );
}

export default Register;