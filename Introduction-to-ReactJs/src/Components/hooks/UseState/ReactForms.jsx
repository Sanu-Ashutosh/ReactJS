import { use, useState } from 'react';
import './ReactForms.css';

const ReactForms = () => {

    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:""
    })

    let handleInputChange = (event) => {
        let { name, value } = event.target;

        setUser((prv) => ({ ...prv, [name]: value, }))

    }

    let HandelFormSubmit = (event)=>{
        event.preventDefault();
        console.log(user)
        
    }

    return (
        <div className="form-container">
            <p className="form-title">Sign Up</p>
            <p className="form-subtitle">Please fill the form to create an account</p>
            <div className="form-fields">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={handleInputChange} required />

                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleInputChange} required />

                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange}required />

                <label htmlFor="password">Password <span className="required">*</span></label>
                <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} required />

                <label htmlFor="phone">Phone <span className="required">*</span></label>
                <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputChange}required />

                <button type="submit" className="submit-button" onClick={HandelFormSubmit}>Create Account</button>
            </div>
            <p>Hii my Name is {user.firstName+" "+user.lastName} .</p>
            <p>Email is {user.email}</p>
            <p>password is {user.password}</p>
            <p>PhoneNumber is {user.phone}</p>
        </div>
    );
};

export default ReactForms;
