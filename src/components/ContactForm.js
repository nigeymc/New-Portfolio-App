import React, { useState, useReducer } from "react";
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return { ...state, name: action.value };
        case 'EMAIL':
            return { ...state, email: action.value };
        case 'SUBJECT':
            return { ...state, subject: action.value };
        case 'MESSAGE':
            return { ...state, message: action.value };
        default:
            throw new Error();
    }
}

const ContactForm = () => {

    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [showFormErr, setShowFormErr] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    const [showCaptcha, setShowCaptcha] = useState(false);
    const { name, email, subject, message } = formState;

    const submitFormAndShowCaptcha = (e) => {
        e.preventDefault();
        setShowCaptcha(true);
    };

    const sendEmail = (captchaValue) => {
        if (name === '' || email === '' || subject === '' || message === '') {
            setShowFormErr(true);
            return;
        }

        const params = {
            from_name: email,
            to_name: 'Niall',
            subject: subject,
            message: message,
            'g-recaptcha-response': captchaValue,
        };

        setFormSubmitted({ title: 'Sending message...', paragraph: '' });

        emailjs.send(
            'service_my3snd5',
            'template_4rj8let',
            params,
            'user_gn7hNUi1KB9jeyD2T016F'
        )
            .then(({ status }) => {
                if (status === 200) {
                    setFormSubmitted({ title: 'Your message has been sent', paragraph: "I'll get back to you as soon as possible" });
                } else {
                    setFormSubmitted({ title: "There was a problem sending your email', paragraph: 'Please try again later or email me directly at mckenna.niall@gmail.com or reach out on LinkedIn" });
                }
            }, (err) => {
                // eslint-disable-next-line no-console
                console.log(err);
                setFormSubmitted({ title: 'Error sending message', paragraph: 'Please try again later or email me directly at mckenna.niall@gmail.com or reach out on LinkedIn' });
            });
    };

    return formSubmitted.title === '' ? (
        <div>
            {!showCaptcha ? (
                <Form id="contact-form" onSubmit={submitFormAndShowCaptcha}>
                    <Form.Group className="form-group">
                        <Form.Control required type="text" name="name" className="form-control" placeholder="Name"
                            onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })}
                            value={name} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Control required type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"
                            onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })}
                            value={email} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Control required type="text" name="subject" className="form-control" placeholder="Subject"
                            onChange={(e) => dispatch({ type: 'SUBJECT', value: e.target.value })}
                            value={subject} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Control required as="textarea" name="message" className="form-control" rows={5}
                            placeholder="Message"
                            onChange={(e) => dispatch({ type: 'MESSAGE', value: e.target.value })}
                            value={message} />
                    </Form.Group>
                    <Form.Group className="form-group">

                    </Form.Group>
                    {showFormErr && <p>Please complete all fields to send a message</p>}
                    <Button variant="primary" type="submit" className="btn btn-primary">Send Message</Button>
                </Form>
            ) : (
                    <ReCAPTCHA
                        sitekey="6Lfng2caAAAAAPH3mUIJVnJRqA7maIMWOdsTz0t2"
                        onChange={sendEmail}
                    />
                )}
        </div>

    ) : (
            <div>
                <h3>{formSubmitted.title}</h3>
                <p>{formSubmitted.paragraph}</p>
            </div>
        );
}

export { ContactForm as default }
