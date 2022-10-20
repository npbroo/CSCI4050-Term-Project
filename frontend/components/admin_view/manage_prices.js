import React, { useState, useEffect } from 'react';

export const ManagePrices = () => {
    // to be pulled in from the database/ backend
    const db_prices = {
            child_ticket_price: 12,
            adult_ticket_price: 16,
            booking_price: 3,
        }

    const [selected_price_editor, set_selected_price_editor] = useState(null) // index of the selected user
    const [prices, set_prices] = useState(db_prices) // stateful storage of users
    
    // save user edits (when you click the save button)
    function save_price(type) {
        if (type == "child") {
            var price = document.getElementById('child_ticket_price').value
            prices.child_ticket_price = price
        } else if (type == "adult") {
            var price = document.getElementById('adult_ticket_price').value
            prices.adult_ticket_price = price
        } else if (type == "booking") {
            var price = document.getElementById('booking_price').value
            prices.booking_price = price
        }
        set_selected_price_editor(null)
        // This is when you would save to the database
    }

    return (
        <>
        <h1 className='text-2xl mb-5'>
            Manage Prices
        </h1>
        <div className='outline outline-2 pb-5'>
        <div className='bg-gray-200 p-2 mb-2 text-xl'>Price Editor:</div>
            <div className='mx-2 p-2 flex items-center text-xl'>
                <div className=''>Child Ticket Price: $</div>
                {selected_price_editor == "child" && 
                    <div className='flex items-center ml-2'>
                        <input defaultValue={prices.child_ticket_price}className='mr-5 p-2 bg-gray-200 rounded-lg' type="number" min="0" max="120" id="child_ticket_price"/>
                        <div className='text-xl mb-2 text-green-500 underline' onClick={() => save_price("child")}>save</div>
                    </div>
                }
                {(selected_price_editor != "child" || selected_price_editor == null) &&
                    <div className='flex items-center'>
                        <h2 className='mr-5'>{prices.child_ticket_price}</h2>
                        <div className='text-xl mb-2 text-blue-500 underline' onClick={() => set_selected_price_editor("child")}>edit</div>
                    </div>
                }
            </div>

            <div className='mx-2 p-2 flex items-center text-xl'>
                <div className=''>Adult Ticket Price: $</div>
                {selected_price_editor == "adult" && 
                    <div className='flex items-center ml-2'>
                        <input defaultValue={prices.adult_ticket_price}className='mr-5 p-2 bg-gray-200 rounded-lg' type="number" min="0" max="120" id="adult_ticket_price"/>
                        <div className='text-xl mb-2 text-green-500 underline' onClick={() => save_price("adult")}>save</div>
                    </div>
                }
                {(selected_price_editor != "adult" || selected_price_editor == null) &&
                    <div className='flex items-center'>
                        <h2 className='mr-5'>{prices.adult_ticket_price}</h2>
                        <div className='text-xl mb-2 text-blue-500 underline' onClick={() => set_selected_price_editor("adult")}>edit</div>
                    </div>
                }
            </div>

            <div className='mx-2 p-2 flex items-center text-xl'>
                <div className=''>Booking Price: $</div>
                {selected_price_editor == "booking" && 
                    <div className='flex items-center ml-2'>
                        <input defaultValue={prices.booking_price}className='mr-5 p-2 bg-gray-200 rounded-lg' type="number" min="0" max="120" id="booking_price"/>
                        <div className='text-xl mb-2 text-green-500 underline' onClick={() => save_price("booking")}>save</div>
                    </div>
                }
                {(selected_price_editor != "booking" || selected_price_editor == null) &&
                    <div className='flex items-center'>
                        <h2 className='mr-5'>{prices.booking_price}</h2>
                        <div className='text-xl mb-2 text-blue-500 underline' onClick={() => set_selected_price_editor("booking")}>edit</div>
                    </div>
                }
            </div>
        </div>
        


        </>
    );
}