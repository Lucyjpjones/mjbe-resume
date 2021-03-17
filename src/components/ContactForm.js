import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../App.css'
import './ContactForm.css'
import AOS from 'aos';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ContactForm() {

    AOS.init({
        duration: 2000
    });

    const [fullName, setFullName] = useState("") 
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const MySwal = withReactContent(Swal)

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
            MySwal.fire({
                title: 'Message sent!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              })
        }, (error) => {
            console.log(error.text);
            MySwal.fire({
                title: 'Message sending failed!',
                text: 'Please try again',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000
              })
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
