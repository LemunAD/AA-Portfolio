import Loader from 'react-loaders';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faHtml5, faWordpress, faJsSquare, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    
    useEffect(() => {
        // Debug: Check if environment variables are loaded
        console.log('Environment variables check:', {
            serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        });
        
        // Initialize EmailJS with your public key
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        
        setTimeout(() => {
          setLetterClass('text-animate-hover') 
        }, 4000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // Add some validation for environment variables
        if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
            !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
            !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
            alert('EmailJS configuration is missing. Please check your environment variables.');
            console.error('Missing environment variables:', {
                serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
                templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            });
            return;
        }

        console.log('Attempting to send email with:', {
            serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        });

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result);
                    alert('Message successfully sent!');
                    // Reset form
                    form.current.reset();
                },
                (error) => {
                    console.error('EmailJS Error Details:', error);
                    console.error('Error status:', error.status);
                    console.error('Error text:', error.text);
                    
                    let errorMessage = 'Failed to send the message. ';
                    if (error.status === 400) {
                        errorMessage += 'Please check your EmailJS configuration.';
                    } else if (error.status === 401) {
                        errorMessage += 'Invalid public key or service credentials.';
                    } else if (error.status === 402) {
                        errorMessage += 'EmailJS quota exceeded.';
                    } else if (error.status === 404) {
                        errorMessage += 'Service ID or Template ID not found. Please verify your EmailJS configuration.';
                    } else {
                        errorMessage += `Error code: ${error.status}`;
                    }
                    
                    alert(errorMessage);
                }
            );
    };
    
    return( <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t','','M','e']} 
                    idx={15}/>
                </h1>
                <p>I'm interested in all freelance opportunities, and more specifically ambitious projects
                    If you would like to hire me or discuss a project, please get in touch using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half '> 
                            <input type='text' name='from_name' placeholder='Name' required />
                            </li>
                            <li className='half '> 
                            <input type='email' name='from_email' placeholder='Email' required />
                            </li>

                            <li>
                            <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND MY MESSAGE' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#202020"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color="#3E75C3"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faWordpress} color="#00749C"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='cube-transition' />
    </>)
}

export default Contact;