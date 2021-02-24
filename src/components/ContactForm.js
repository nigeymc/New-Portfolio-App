import React, { useState, useEffect } from "react";
import { Axios, firestoreDb } from '../firebase/firebase';
import { Form, Button } from 'react-bootstrap';

const ContactForm = (props) => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-my-portfolio-e6d17.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                firestoreDb.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Form id="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="form-group">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" name="name" className="form-control" placeholder="Name"
                    onChange={updateInput}
                    value={formData.name || ''} />
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                <Form.Control type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"
                    onChange={updateInput}
                    value={formData.email || ''} />
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" name="message" className="form-control" rows={5}
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''} />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary">Send Message</Button>
        </Form>
    )
}

export { ContactForm as default }
