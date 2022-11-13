import { Box } from '@mui/material';
import React from 'react';
import InputField from '../../Custom/InputField';
import PrimaryButton from '../../Custom/PrimaryButton';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Swal from 'sweetalert2';
const ContactForm = () => {
    const [formData, setFormData] = useState({});

    const handleOnChange = (e) => {
        setFormData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Good job!",
                    text: "Message Send Successfully!",
                    timer: 2000
                })
                e.target.reset();
            }, () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 2000
                })
            });
    }
    return (
        <Box sx={{ bgcolor: "light.main", p: "24px 35px", mt: 4 }}>
            <form onSubmit={handleSubmit}>
                <InputField
                    required
                    size='small'
                    margin='normal'
                    fullWidth
                    variant='outlined'
                    type="text"
                    label="Full name"
                    onChange={handleOnChange}
                    name="name"
                />
                <InputField
                    required
                    size='small'
                    margin='normal'
                    fullWidth
                    variant='outlined'
                    type="email"
                    label="Email address"
                    onChange={handleOnChange}
                    name="email"
                />
                <InputField
                    required
                    size='small'
                    margin='normal'
                    fullWidth
                    variant='outlined'
                    type="number"
                    label="Phone number"
                    onChange={handleOnChange}
                    name="phone"
                />
                <InputField
                    size='small'
                    margin='normal'
                    fullWidth
                    variant='outlined'
                    type="text"
                    label="Company name"
                    onChange={handleOnChange}
                    name="companyName"
                />
                <InputField
                    required
                    size='small'
                    margin='normal'
                    multiline
                    rows={4}
                    fullWidth
                    variant='outlined'
                    type="text"
                    label="Anything else?"
                    onChange={handleOnChange}
                    name="message"
                />
                <PrimaryButton sx={{ mt: 2 }} fullWidth type="submit">Contact us</PrimaryButton>
            </form>
        </Box>
    );
};

export default ContactForm;