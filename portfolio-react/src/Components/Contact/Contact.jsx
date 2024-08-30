import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import linkedin_icon from '../../assets/linked.svg'; // Updated import statement

const Contact = () => {
    const [result, setResult] = useState(null); // State to store form submission result

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b0d7272e-02ba-4c42-a787-eff7119bffe7");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert("Form Submitted Successfully"); // Add alert message
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme Pattern"/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Ready to discuss your project? Let's connect and bring your ideas to life.</h1>
                    <p>"I'm currently open to new opportunities and excited to take on fresh projects. Please don't hesitate to reach out to discuss potential collaborations."</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon"/> <p>pahuldeepsingh12@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon"/> <p>431-388-6323</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon"/> <p>Canada</p>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.linkedin.com/in/pahuldeep-singh-b7aa22181" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                <img src={linkedin_icon} alt="LinkedIn Icon" className="linkedin-icon" />
                                <br />
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor='name'>Your name</label>
                    <input type="text" id="name" placeholder='Enter your name' name="name" required />
                    <label htmlFor='email'>Your Email</label>
                    <input type="email" id="email" placeholder='Enter your Email' name='email' required />
                    <label htmlFor='message'>Write your message here</label>
                    <textarea id="message" name="message" rows="9" placeholder="Enter your message" required></textarea>
                    <button type="submit" className='contact-submit' id='sub'>Submit now</button>
                    {result && <p className="form-result">{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
