import React, {useState} from 'react';

export const EditProfile = () => {
    const db_user =
        {
            email: "lunajenk@gmail.com",
            password: "sillybilly",
            first: "Luna",
            last: "Jenkins",
            phone: 6054756968,
            mail: "Yes"
        }

    const [curr, setUser] = useState(0);
    const [user, setUpdate] = useState(db_user) 
    const [checked, setChecked] = useState(true)

    const mailCheck = () => {
        setChecked(!checked)
    }

    function save_personal() {
        var password = document.getElementById('passwordO').value
        var newPassword = document.getElementById('passwordN').value
        var first = document.getElementById('first').value
        var last = document.getElementById('last').value
        var phone = document.getElementById('phoneE').value
        
        if (password === user.password)
        {
            user.password = newPassword
        }
        user.first = first
        user.last = last
        user.phone = phone
        if ( checked == true )
        {
            user.mail = "Yes"
        } else {
            user.mail = "No"
        }

        setUser(0)
        setUpdate(user)
    }
    return (
        <>
        <h1 className="font-bold mb-4">
            Luna Jenkins' Profile
        </h1>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-5 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Name</div>
                <div className='text-xl mb-2'>Email</div>
                <div className='text-xl mb-2'>Phone</div>
                <div className='text-xl mb-2'>Password</div>
                <div className='text-xl mb-2'>Promo Mail</div>
            </div>
            <div className='grid grid-cols-5 px-5'>
                {curr == 0 &&
                    <>
                    <div className='text-xl mb-2'>{user.first} {user.last}</div>
                    <div className='text-xl mb-2'>{user.email}</div>
                    <div className='text-xl mb-2 ml-2'>{user.phone}</div>
                    <div className='text-xl mb-2'>{"********"}</div>
                    <div className='text-xl mb-2'>{user.mail}</div>

                    <div className='text-xl mb-2 text-blue-500 underline' onClick={() => setUser(1)}>edit</div>
                    </>
                }

                {curr == 1 &&
                <>
                    <div className='flex'>
                        <input placeholder="First" defaultValue={user.first} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="first"/>
                        <input placeholder="Last" defaultValue={user.last} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="last"/>
                    </div>
                    <div className='text-xl mb-2'>{user.email}</div>
                    <input placeholder="Phone" defaultValue={user.phone} className='mr-5 p-2 bg-gray-100' type="text" id="phoneE"/>
                    <div className='flex'>
                        <input placeholder="Old Password" className='w-1/2 mr-5 p-2 bg-gray-100' type="password" id="passwordO"/>
                        <input placeholder="New Password" className='w-1/2 mr-5 p-2 bg-gray-100' type="password" id="passwordN"/>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" checked={checked} onChange={mailCheck} /> Mail List
                        </label>
                    </div>
                    <div className='flex'>
                        <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => setUser(0)}>cancel</div>
                        <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_personal()}>save</div>
                    </div>
                </>
                }
                    </div>
                 </div>
        </>
    );
}