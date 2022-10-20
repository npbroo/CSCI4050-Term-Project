import React, { useState } from 'react';

export const OrderSummary = () => {
    const db_order = {
        order_number: 1,
        booking_price: 3,
        total: 48,
        name: "Luna Jenkins",
        tickets: [
            {
                movie:"Don't Worry Darling",
                date: "2022-09-20",
                time: "6:00",
                seat: "G7",
                type: "adult",
                price: 16
            },
            {
                movie:"Don't Worry Darling",
                date: "2022-09-20",
                time: "6:00",
                seat: "G8",
                type: "adult",
                price: 16
            },
            {
                movie:"Don't Worry Darling",
                date: "2022-09-20",
                time: "6:00",
                seat: "G9",
                type: "adult",
                price: 16
            }
        ]
    }

    const [order, set_tickets] = useState(db_order)

    function delete_ticket(ticketIndex) {
        order.splice(ticketIndex,1)
        set_tickets([...order])
    }

    return (
        <>
        <h1 className='text-2xl text-gray-700 mb-5'>
            Order Summary
        </h1>
        <div className='text-xl mb-2'>
            Please review your order before going on to checkout. Your cart will be saved for 3:00 longer.
        </div>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-6 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Movie</div>
                <div className='text-xl mb-2'>Showing</div>
                <div className='text-xl mb-2'>Seat</div>
                <div className='text-xl mb-2'>Type</div>
                <div className='text-xl mb-2 text-right'>Price</div>
            </div>

            {order && order.tickets && order.tickets.length > 0 && order.tickets.map((ticket, index) => {
                return(
                    <div key={`ticket_${index}`}>
                        <div className='grid grid-cols-6 px-5'>
                            <div className='text-xl mb-2 hover:underline hover:text-sky-700'>{ticket.movie}</div>
                            <div className='text-xl mb-2 hover:underline hover:text-sky-700'>{ticket.date} {ticket.time}</div>
                            <div className='text-xl mb-2 hover:underline hover:text-sky-700'>{ticket.seat}</div>
                            <div className='text-xl mb-2 '>{ticket.type}</div>
                            <div className='text-xl mb-2 mr-2 text-right'>${ticket.price.toFixed(2)}</div>
                            <div className='mx-5 mb-2'>
                                <div className='text-xl text-right text-red-500 underline' onClick={() => delete_ticket(index)}>delete</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className='text-end text-xl mr-5'>
            <div className='mb-2 mt-4'>
                Booking Fee ${order.booking_price.toFixed(2)}
            </div>
            <div className='text-end mb-2'>
                Tax${(order.total * 0.07).toFixed(2)}
            </div>
            <h2 className='text-end mb-8'>
                Sub-total${(order.total + (order.total * 0.07)).toFixed(2)}
            </h2>
        </div>

        <h2 className='text-xl mb-10'>
            {order.name}, We hope to see you at the movies soon!
        </h2>
        </>
    );
}