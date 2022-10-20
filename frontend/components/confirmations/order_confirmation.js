import React, { useState, useEffect } from 'react';

export const OrderConfirmation = () => {
    // to be pulled in from the database/ backend
    const db_order = {
        order_number: 1,
        booking_price: 3,
        total: 33, // this is the smm of all the ticket prices plus the booking price
        name: "Bobby Tyson",
        tickets: [
            {
                movie:"Top Gun: Maverick",
                date: "2022-09-20",
                time: "12:00",
                seat: "A1",
                type: "adult",
                price: 16
            },
            {
                movie:"Top Gun: Maverick",
                date: "2022-09-20",
                time: "12:00",
                seat: "A2",
                type: "child",
                price: 12
            },
            {
                movie:"Top Gun: Maverick",
                date: "2022-09-20",
                time: "12:00",
                seat: "A3",
                type: "child",
                price: 12
            }
        ]
    }

    const [order] = useState(db_order) // stateful storage of order/ tickets

    return (
        <>
        <h1 className='text-2xl text-green-500 mb-5'>
            Thank You!
        </h1>
        <div className='text-xl mb-2'>
            Your order has been placed successfully. Your order details are below:
        </div>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-5 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Movie</div>
                <div className='text-xl mb-2'>Showing</div>
                <div className='text-xl mb-2'>Seat</div>
                <div className='text-xl mb-2'>Type</div>
                <div className='text-xl mb-2 text-right'>Price</div>
            </div>

            {/* map the tickets to a flex box if the array exists and the length > 0 */}
            {order && order.tickets && order.tickets.length > 0 && order.tickets.map((ticket, index) => {
                return(
                    <div key={`ticket_${index}`}>
                        <div className='grid grid-cols-5 px-5'>
                            <div className='text-xl mb-2'>{ticket.movie}</div>
                            <div className='text-xl mb-2'>{ticket.date} {ticket.time}</div>
                            <div className='text-xl mb-2'>{ticket.seat}</div>
                            <div className='text-xl mb-2'>{ticket.type}</div>
                            <div className='text-xl mb-2 text-right'>${ticket.price.toFixed(2)}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        {/* display price totals */}
        <div className='text-end text-xl mr-5'>
            <div className='mb-2'>
                Booking Fee ${order.booking_price.toFixed(2)}
            </div>
            <div className='mb-2'>
                Tax ${(order.total * 0.07).toFixed(2)}
            </div>
            <h2 className='mb-2'>
                Total ${(order.total + (order.total * 0.07)).toFixed(2)}
            </h2>
        </div>
        <h2 className='text-xl'>
            {order.name}, thank you for choosing Ultra Entertainment Cinemas. We hope to see you again!
        </h2>
        </>
    );
}