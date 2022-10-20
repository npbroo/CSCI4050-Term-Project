import React, { useState, useEffect } from 'react';

export const ManageUsers = () => {
    // to be pulled in from the database/ backend
    const db_users = [
        {
            email: "nathan@gmail.com",
            first: "Nathan",
            last: "Brooks",
            age: 24,
            role: "admin",
            home_address: "Still Creek Lane",
            home_city: "Athens",
            home_state: "GA",
            home_zip: 30605,
            status: "Active",
        },
    ]

    const [userSelected, set_user_selected] = useState(null) // index of the selected user
    const [users, set_users] = useState(db_users) // stateful storage of users
    
    // save user edits (when you click the save button)
    function save_user(index) {
        var email = document.getElementById('selected_email').value
        var first = document.getElementById('selected_first').value
        var last = document.getElementById('selected_last').value
        var role = document.getElementById('selected_role').value
        var age = document.getElementById('selected_age').value
        var phone = document.getElementById('selected_phone').value
        var home_address = document.getElementById('selected_home_address').value
        var home_city = document.getElementById('selected_home_city').value
        var home_state = document.getElementById('selected_home_state').value
        var home_zip = document.getElementById('selected_home_zip').value
        var billing_address = document.getElementById('selected_billing_address').value
        var billing_city = document.getElementById('selected_billing_city').value
        var billing_state = document.getElementById('selected_billing_state').value
        var billing_zip = document.getElementById('selected_billing_zip').value
        var status = document.getElementById('selected_status').value

        users[index].email = email
        users[index].first = first
        users[index].last = last
        users[index].role = role
        users[index].age = parseInt(age)
        users[index].phone = phone
        users[index].status = status
        users[index].home_address = home_address
        users[index].home_city = home_city
        users[index].home_state = home_state
        users[index].home_zip = home_zip
        users[index].billing_address = billing_address
        users[index].billing_city = billing_city
        users[index].billing_state = billing_state
        users[index].billing_zip = billing_zip
        set_users([...users])
        set_user_selected(null)
        // This is when you would save to the database
    }

    // delete a user (when you click the delete button)
    function delete_user(user_index) {
        users.splice(user_index,1)
        set_users([...users])
        set_user_selected(null)
        // This is where you would delete from database
    }

    // add a user (when you fill out the add new user form)
    function add_user() {
        var email = document.getElementById('new_email').value
        var first = document.getElementById('new_first').value
        var last = document.getElementById('new_last').value
        var role = document.getElementById('new_role').value
        if (email && first && last && role) {
            let new_user = {
                email: email,
                first: first,
                last: last,
                role: role,
                status: "valid",
            }
            users.push(new_user)
            set_users([...users])
        }
        // This is where you would save to the database
    }

    return (
        <>
        <h1 className='text-2xl mb-5'>
            Manage Users
        </h1>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-4 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Name</div>
                <div className='text-xl mb-2'>Email</div>
                <div className='text-xl mb-2'>Role</div>
            </div>
            {/* Map the movies to a flex box if the array exists and the length > 0 */}
            {users && users.length > 0 && users.map((user, index) => {
                return(
                    <>
                    <div key={`manage_movie_${index}`} className='grid grid-cols-4 px-5'>
                        {/* if user is not selected, display basic user info */}
                        {index != userSelected &&
                            <>
                            <div className='text-xl mb-2'>{user.first} {user.last}</div>
                            <div className='text-xl mb-2'>{user.email}</div>
                            <div className='text-xl mb-2'>{user.role}</div>
                            {userSelected == null &&
                                <div className='text-xl mb-2 text-blue-500 underline' onClick={() => set_user_selected(index)}>edit</div>
                            }
                            </>
                        }

                        {/* else, if user is selected, replace basic user info with the basic user editor */}
                        {index == userSelected &&
                        <>
                            <div className='flex'>
                                <input placeholder="First" defaultValue={user.first} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="selected_first"/>
                                <input placeholder="Last" defaultValue={user.last} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="selected_last"/>
                            </div>
                            <input placeholder="Email" defaultValue={user.email} className='mr-5 p-2 bg-gray-100' type="text" id="selected_email"/>
                            <select defaultValue={user.role} className='mr-5 p-2 bg-gray-100' id="selected_role">
                                <option value="Customer">Customer</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <div className='flex'>
                                <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => set_user_selected(null)}>cancel</div>
                                <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_user(index)}>save</div>
                            </div>
                        </>
                        }
                    </div>

                    {/* if the user is selected, also display the advanced editor*/}
                    {index == userSelected &&
                        <div className='my-5'>
                            
                            {/* user expanded information editor */}
                            <div className='bg-gray-100 pb-2 text-lg mx-5 mb-5'>

                                {/* About information */}
                                <div className='bg-gray-200 p-2 mb-2'>About:</div>
                                <div className='p-2'>
                                    <div>Age:</div>
                                    <input defaultValue={user.age} className='mr-5 p-2 rounded-lg' type="number" min="0" max="120" id="selected_age"/>
                                </div>
                                <div className='p-2'>
                                    <div>Phone:</div>
                                    <input defaultValue={user.phone} className='mr-5 p-2 rounded-lg' type="tel" id="selected_phone"/>
                                </div>
                                <div className='p-2'>
                                    <div>Home Address:</div>
                                    <input placeholder="Address" defaultValue={user.home_address} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_home_address"/>
                                    <input placeholder="City" defaultValue={user.home_city} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_home_city"/>
                                    <input placeholder="State" defaultValue={user.home_state} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_home_state"/>
                                    <input placeholder="Zip Code" defaultValue={user.home_zip} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_home_zip"/>
                                </div>
                                <div className='p-2'>
                                    <div>Billing Address:</div>
                                    <input placeholder="Address" defaultValue={user.billing_address} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_billing_address"/>
                                    <input placeholder="City" defaultValue={user.billing_city} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_billing_city"/>
                                    <input placeholder="State" defaultValue={user.billing_state} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_billing_state"/>
                                    <input placeholder="Zip Code" defaultValue={user.billing_zip} className='mr-5 p-2 rounded-lg' type="text" min="0" max="120" id="selected_billing_zip"/>
                                </div>
                                <div className='p-2'>
                                    <div>Status:</div>
                                    <select defaultValue={user.status} className='mr-5 p-2' id="selected_status">
                                        <option value="Active">Active</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>


                            {/* delete user button */}
                            <div className='mx-5 mb-10'>
                                <div className='text-xl float-right text-red-500 underline' onClick={() => delete_user(index)}>delete user</div>
                            </div>
                        </div>
                    }
                    </>
                )                
            })
            }

            {/* add new user editor*/}
            {userSelected == null &&
                <div className='grid grid-cols-4 px-5'>
                    <div className='flex'>
                                <input placeholder='First' className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="new_first"/>
                                <input placeholder='Last' className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="new_last"/>
                            </div>
                            <input placeholder='Email' className='mr-5 p-2 bg-gray-100' type="text" id="new_email"/>
                            <select defaultValue='Customer' className='mr-5 p-2 bg-gray-100' id="new_role">
                                <option value="Admin">Admin</option>
                                <option value="Customer">Customer</option>
                            </select>
                    <div className='text-xl mb-2 text-green-500 underline' onClick={() => add_user()}>add new user</div>
                </div>
            }
        </div>
        


        </>
    );
}