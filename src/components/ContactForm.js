import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../App.css'
import './ContactForm.css'
import AOS from 'aos';

function ContactForm() {

    AOS.init({
        duration: 2000
    });

    const [fullName, setFullName] = useState("") 
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm(
          'mjbe_resume',
          'resume_template',
          e.target,
          'user_hOKGMmw6fCZlGr94jefqx')
        .then((result) => {
            console.log(result.text);
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
    <Container className='contact-container'>
            <h2 style={{'fontSize':'30px', 'marginBottom':10}} >Get in Touch</h2>
            <h3 style={{'fontSize':'16px', 'marginBottom':20}}>
                Please fill out the form below to contact me via email.
            </h3>
            <form className="contact-form" onSubmit={sendEmail} >
                <div className='field'>
                    <label>Full Name</label>
                    <input value={fullName} onChange={e => setFullName(e.target.value)} type="text" name="fullName" />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" />
                </div>
                <div className='field'>
                    <label>Subject</label>
                    <input value={subject} onChange={e => setSubject(e.target.value)} type="text" name="subject" />
                </div>
                <div className='field'>
                    <label>Message</label>
                    <textarea className='field' value={message} onChange={e => setMessage(e.target.value)} name="message" />
                </div>
                <input type="submit" value="Send Message" />
            </form>
        </Container>
    );
  }

export default ContactForm
