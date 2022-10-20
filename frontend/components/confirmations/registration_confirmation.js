import React, { useState, useEffect } from 'react';

export const RegistrationConfirmation = () => {
    // to be pulled in from the database/ backend
    const db_registrant = {
        first: "Bobby",
        last: "Tyson",
        email: "bobbytyson@gmail.com"
    }

    const [registrant] = useState(db_registrant) // stateful storage of users

    return (
        <>
        <h1 className='text-2xl text-green-500 mb-5'>
            Registration Confirmed!
        </h1>
        <div className='text-xl mb-2'>
            <div className='mb-5'>Hi {registrant.first} {registrant.last}, <br/>Thank you for registering for the Ultra Entertainment Cinemas e-booking system!</div>
            <div>Below are your account credentials:</div>
            <h2 className='ml-5 mb-5'>
                Email: {registrant.email}
            </h2>
            <div>You should receive a confirmation email shortly. We look forward to serving you!</div>

        </div>
        </>
    );
}