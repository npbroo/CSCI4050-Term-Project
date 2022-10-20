import React, { useState, useEffect } from 'react';

export const ManagePromos = () => {
    // to be pulled in from the database/ backend
    const db_promos = [
        {
            promo_code: "KIDS50OFF",
            start_date: "2022-09-20",
            start_time: "14:00",
            end_date: "2022-09-25",
            end_time: "14:00",
            child_discount: 50,
            adult_discount: 0,
            status: "Active"
        },
    ]

    const [promoSelected, set_promo_selected] = useState(null) // index of the selected promo
    const [promos, set_promos] = useState(db_promos) // stateful storage of promos
    
    // save promo edits (when you click the save button)
    function save_promo(index) {
        var promo_code = document.getElementById('selected_promo_code').value
        var start_date = document.getElementById('selected_promo_start_date').value
        var start_time = document.getElementById('selected_promo_start_time').value
        var end_date = document.getElementById('selected_promo_end_date').value
        var end_time = document.getElementById('selected_promo_end_time').value
        var child_discount = document.getElementById('selected_child_discount').value
        var adult_discount = document.getElementById('selected_adult_discount').value
        var status = document.getElementById('selected_status').value

        promos[index].promo_code = promo_code
        promos[index].start_date = start_date
        promos[index].start_time = start_time
        promos[index].end_date = end_date
        promos[index].end_time = end_time
        promos[index].child_discount = child_discount
        promos[index].adult_discount = adult_discount
        promos[index].status = status
        set_promos([...promos])
        set_promo_selected(null)
        // This is when you would save to the database
    }

    // delete a promo (when you click the delete button)
    function delete_promo(promo_index) {
        promos.splice(promo_index,1)
        set_promos([...promos])
        set_promo_selected(null)
        // This is where you would delete from database
    }

    // add a promo (when you fill out the add new promo form)
    function add_promo() {
        var promo_code = document.getElementById('new_promo_code').value
        var start_date = document.getElementById('new_promo_start_date').value
        var start_time = document.getElementById('new_promo_start_time').value
        var end_date = document.getElementById('new_promo_end_date').value
        var end_time = document.getElementById('new_promo_end_time').value
        if (promo_code && start_date && start_time && end_date && end_time) {
            let new_promo = {
                promo_code: promo_code,
                start_date: start_date,
                start_time: start_time,
                end_date: end_date,
                end_time: end_time,
                child_discount: 0,
                adult_discount: 0,
                status: "Disabled"
            }
            promos.push(new_promo)
            set_promos([...promos])
        }
        // This is where you would save to the database
    }

    return (
        <>
        <h1 className='text-2xl mb-5'>
            Manage Promos
        </h1>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-4 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Promo Code</div>
                <div className='text-xl mb-2'>Start Date</div>
                <div className='text-xl mb-2'>End Date</div>
            </div>
            {/* Map the promos to a flex box if the array exists and the length > 0 */}
            {promos && promos.length > 0 && promos.map((promo, index) => {
                return(
                    <>
                    <div key={`manage_movie_${index}`} className='grid grid-cols-4 px-5'>
                        {/* if promo is not selected, display basic promo info */}
                        {index != promoSelected &&
                            <>
                            <div className='text-xl mb-2'>{promo.promo_code}</div>
                            <div className='text-xl mb-2'>{promo.start_date} {promo.start_time}</div>
                            <div className='text-xl mb-2'>{promo.end_date} {promo.end_time}</div>
                            {promoSelected == null &&
                                <div className='text-xl mb-2 text-blue-500 underline' onClick={() => set_promo_selected(index)}>edit</div>
                            }
                            </>
                        }

                        {/* else, if promo is selected, replace basic promo info with the basic promo editor */}
                        {index == promoSelected &&
                        <>
                            <input placeholder="Promo Code" defaultValue={promo.promo_code} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="selected_promo_code"/>
                            <div className='flex items-center'>
                                <input defaultValue={promo.start_date} className='p-2 bg-gray-100 mr-2' type="date" id='selected_promo_start_date'/>
                                <input defaultValue={promo.start_time} className='p-2 bg-gray-100' type="time" id='selected_promo_start_time'/>
                            </div>
                            <div className='flex items-center'>
                                <input defaultValue={promo.end_date} className='p-2 bg-gray-100 mr-2' type="date" id='selected_promo_end_date'/>
                                <input defaultValue={promo.end_time} className='p-2 bg-gray-100' type="time" id='selected_promo_end_time'/>
                            </div>
                            <div className='flex'>
                                <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => set_promo_selected(null)}>cancel</div>
                                <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_promo(index)}>save</div>
                            </div>
                        </>
                        }
                    </div>

                    {/* if the promo is selected, also display the advanced editor*/}
                    {index == promoSelected &&
                        <div className='my-5'>
                            
                            {/* promo expanded information editor */}
                            <div className='bg-gray-100 pb-2 text-lg mx-5 mb-5'>
                                {/* discount information */}
                                <div className='bg-gray-200 p-2 mb-2'>Discounts:</div>
                                <div className='p-2'>
                                    <div>Child Discount:</div>
                                    <input defaultValue={promo.child_discount} className='mr-1 p-2 rounded-lg' type="number" min="0" max="100" id="selected_child_discount"/> %
                                </div>
                                <div className='p-2'>
                                    <div>Adult Discount:</div>
                                    <input defaultValue={promo.adult_discount} className='mr-1 p-2 rounded-lg' type="number" min="0" max="100" id="selected_adult_discount"/> %
                                </div>
                                <div className='p-2'>
                                    <div>Status:</div>
                                    <select defaultValue={promo.status} className='mr-5 p-2' id="selected_status">
                                        <option value="Active">Active</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                            </div>


                            {/* delete promo button */}
                            <div className='mx-5 mb-10'>
                                <div className='text-xl float-right text-red-500 underline' onClick={() => delete_promo(index)}>delete promo</div>
                            </div>
                        </div>
                    }
                    </>
                )                
            })
            }

            {/* add new promo editor*/}
            {promoSelected == null &&
                <div className='grid grid-cols-4 px-5'>
                    <input placeholder="Promo Code" className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="new_promo_code"/>
                    <div className='flex items-center'>
                        <input className='p-2 bg-gray-100 mr-2' type="date" id='new_promo_start_date'/>
                        <input className='p-2 bg-gray-100' type="time" id='new_promo_start_time'/>
                    </div>
                    <div className='flex items-center'>
                        <input className='p-2 bg-gray-100 mr-2' type="date" id='new_promo_end_date'/>
                        <input className='p-2 bg-gray-100' type="time" id='new_promo_end_time'/>
                    </div>
                    <div className='text-xl mb-2 text-green-500 underline' onClick={() => add_promo()}>add new promo</div>
                </div>
            }
        </div>
        </>
    );
}