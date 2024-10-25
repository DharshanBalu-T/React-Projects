App.jsx
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import About from './About';
import Contact from './Contact';
import RegistrationForm from './RegistrationForm';
import SubmittedForm from './SubmittedForm';
import Navbar from './Navbar';
const App = () => {
 return (
 <div className='App'>
 <BrowserRouter>
 <Navbar />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/destionation' element={<Destination />} />
 <Route path='/about' element={<About />} />
 <Route path='/contact' element={<Contact />} />
 <Route path='/registration' element={<RegistrationForm />} />
 <Route path='/submittedform' element={<SubmittedForm />} />
 </Routes>
 </BrowserRouter>
 </div>
 )
}
export default App;

Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
 return (
 <div className='container'>
 <ul className='nav_links'>
 <li><Link className='nav_link' to={`/`}>Home</Link></li>
 <li><Link className='nav_link' to={`/about`}>About us</Link></li>
 <li><Link className='nav_link' to={`/destination`}>Destination</Link></li>
 <li><Link className='nav_link' to={`/contact`}>Contact us</Link></li>
 <li><Link className='nav_link' to={`/registration`}>Registration Form</Link></li>
 <li><Link className='nav_link' to={`/submittedform`}>Submitted Form</Link></li>
 </ul>
 </div>
 )
}
export default Navbar;

Home.jsx
import React from 'react';
const Home = () => {
 return (
 <div>Home</div>
 )
}
export default Home;

About.jsx
import React from 'react'
const About = () => {
 return (
 <div>About</div>
 )
}
export default About;

Contact.jsx
import React from 'react'
const Contact = () => {
 return (
 <div>Contact</div>
 )
}
export default Contact;

Destination.jsx
import React from 'react'
const Destination = () => {
 return (
 <div>Destination</div>
 )
}
export default Destination;

RegistrationForm.jsx
import React, { useState } from 'react';
import './Form.css';
export let values = {};
const RegistratonForm = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 passport: '',
 travel: '',
 return: '',
 destination: '',
 reason: ''
 });
 const handleChangeEvent = (event) => {
 const { name, value } = event.target;
 setFormData({
 ...formData,
 [name]: value
 })
 }
 const handleSubmit = (event) => {
 event.preventDefault();
 values = formData;
 }
 return (
 <div className='form__container'>
 <form className='register__form' method='POST' onSubmit={handleSubmit}>
 <div className="input__fields">
 <label htmlFor="name">Name</label>
 <input type="text" name="name" id="name" data-testid="name-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="email">Email</label>
 <input type="email" name="email" id="email" data-testid="email-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="phone">Phone</label>
 <input type="text" name="phone" id="phone" data-testid="phone-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="passport">Passport</label>
 <input type="text" name="passport" id="passport" data-testid="passport-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="travel">Travel date</label>
 <input type="date" name="travel" id="travel" data-testid="travel-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="return">Return date</label>
 <input type="date" name="return" id="return" data-testid="return-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="destination">Destination</label>
 <input type="text" name="destination" id="destination" data-testid="destination-input"
required onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="reason">Reason for travel</label>
 <input type="text" name="reason" id="reason" data-testid="reason-input" required
onChange={handleChangeEvent} />
 </div>
 <button className='submit__btn' type="submit">Login</button>
 </form>
 </div>
 )
}
export default RegistratonForm;

SubmittedForm.jsx
import React from 'react'
import { values } from './RegistrationForm';
const SubmittedForm = () => {
 return (
 <div className='submitted_container'>
 <h3 className='heading'>Submitted Form</h3>
 <p className='data'>Name : {values.name}</p>
 <p className='data'>Email : {values.email}</p>
 <p className='data'>Phone : {values.phone}</p>
 <p className='data'>Passport : {values.passport}</p>
 <p className='data'>Travel Date: {values.travel}</p>
 <p className='data'>Return data: {values.return}</p>
 <p className='data'>Destination: {values.destination}</p>
 <p className='data'>Reason : {values.reason}</p>
 </div>
 )
}
export default SubmittedForm;

Form.css
.form__container {
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-content: center;
 align-items: center;
 user-select: none;
}
.register__form {
 width: 300px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
.input__fields {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: last baseline;
 margin: 10px 0;
}
label {
 margin-bottom: 5px;
 letter-spacing: 1px;
}
input {
 width: 200px;
 height: 20px;
 text-align: left;
 letter-spacing: 1px;
 padding-left: 10px;
 border: 0.2px solid #00000090;
 border-radius: 10px;
 outline: none;
}
input:focus-within {
 border: 1.1px solid #000;
}
.submit__btn {
 width: 120px;
 height: 25px;
 background-color: #000;
 color: #fff;
 text-align: center;
 letter-spacing: 1px;
 border: none;
 border-radius: 10px;
 cursor: pointer;
}
.submitted_container {
 width: 100%;
 height: 100vh;
}
.heading,
.data {
 margin-top: 5px;
}

Navbar.css
.container {
 width: 100%;
 height: 50px;
 background-color: #00000055;
 display: flex;
 flex-direction: column;
}
.nav_links {
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 list-style: none;
}
.nav_link {
 text-decoration: none;
 color: skyblue;
 font-size: 1rem;
 font-weight: 600;
 margin-left: 20px;
 letter-spacing: 1px;
}
.nav_links li:first-child .nav_link {
 color: skyblue;
 font-size: 1rem;
 font-weight: 600;
 margin-left: 0px;
 letter-spacing: 1px;
}