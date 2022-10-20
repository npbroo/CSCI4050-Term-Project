import React, {useState} from 'react';

export const EditAddress = () => {
    // should be pulled from backend
    const db_addr =
        {
            street: "Shady Ln",
            city: "Athens",
            state: "GA",
            zip: "30606"
        }

    const [curr, setUser] = useState(0);
    const [addr, setUpdate] = useState(db_addr) 
    function save_addr() {
        var street = document.getElementById('streetE').value
        var city = document.getElementById('cityE').value
        var state = document.getElementById('stateE').value
        var zip = document.getElementById('zipE').value
        
        addr.street = street
        addr.city = city
        addr.state = state
        addr.zip = zip

        setUser(0)
        setUpdate(addr)
    }
    return (
        <>
        <h1 className="font-bold mb-4">
            Luna Jenkins' Home Address
        </h1>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-4 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Street</div>
                <div className='text-xl mb-2'>City</div>
                <div className='text-xl mb-2'>State</div>
                <div className='text-xl mb-2'>Zip</div>
            </div>
            <div className='grid grid-cols-4 px-5'>
                {curr == 0 &&
                    <>
                    <div className='text-xl mb-2'>{addr.street}</div>
                    <div className='text-xl mb-2'>{addr.city}</div>
                    <div className='text-xl mb-2'>{addr.state}</div>
                    <div className='text-xl mb-2'>{addr.zip}</div>

                    <div className='text-xl mb-2 text-blue-500 underline' onClick={() => setUser(1)}>edit</div>
                    </>
                }

                {curr == 1 &&
                <>
                    <input placeholder="Street" defaultValue={addr.street} className='mr-5 p-2 bg-gray-100' type="text" id="streetE"/>
                    <input placeholder="City" defaultValue={addr.city}className='mr-5 p-2 bg-gray-100' type="text" id="cityE"/>
                    <select className="mr-5 p-2 bg-gray-100" name="state" id="stateE">
                        <option>AL</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>NC</option>
                        <option>SC</option>
                        <option>TN</option>
                    </select>
                    <input placeholder="Zip" defaultValue={addr.zip}className='mr-5 p-2 bg-gray-100' type="text" id="zipE"/>
                    <div className='flex'>
                        <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => setUser(0)}>cancel</div>
                        <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_addr()}>save</div>
                    </div>
                </>
                }
                    </div>
                 </div>
        </>
    );
}