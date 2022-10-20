import React, {useState} from 'react';

export const Register = () => {
    const [checked, setChecked] = useState(true)

    const promoCheck = () => {
        setChecked(!checked)
    }

    const createAccount = async (event) => {
        event.preventDefault(); 
    }
    return (
        <>
        <h1 className="font-bold mb-4">
            Create your new account
        </h1>
        <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={createAccount}>
            <h3 className="font-bold mb-3">
                Personal Information
            </h3>
            <div className="flex items-center justify-start">
                <div className="mb-4 w-1/2 mr-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                        First Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fname" name="fname" placeholder="First name" required />
                </div>

                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                        Last Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="lname" name="lname" placeholder="Last name" required />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number (just numbers)</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" name="phone" placeholder="XXXXXXXXXX" required />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    E-mail Address</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="you@mail.com" required />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="Password" placeholder="Password" required />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordV">
                    Verify Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="Password" placeholder="Confirm Password" required />
            </div>

            <h3 className="font-bold text-l">
                Home Address</h3>
            <p className = "mb-4">
                (optional)</p>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                    Street</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="street" name="street" placeholder="XXX Example Rd, Apt XX" />
            </div>

            <div className="flex items-center justify-start">
                <div className="mb-6 mr-4 w-2/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="city" name="city" placeholder="City" />
                </div>

                <div className="mb-6 mx-4 w-1/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
                    <select className="w-full" name="state" id="state">
                        <option>AL</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>NC</option>
                        <option>SC</option>
                        <option>TN</option>
                    </select>
                </div>

                <div className="mb-6 mx-4 w-2/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                        Zip</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="zip" name="zip" placeholder="XXXXX" />
                </div>
            </div>

            <h3 className="font-bold text-l">
                Card</h3>
            <p className = "mb-4">
                (optional)</p>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
                    Card Number</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="card" name="card" placeholder="XXXXXXXXXXXXXXXX" />
            </div>
            
            <div className="flex items-center justify-start mb-4">
                <div className=" mr-4">
                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="expiry">
                        Expiration Date </label>
                    <input className="shadow appearance-none border rounded w-full mr-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="expiry" name="expiry" placeholder="MM/YY" />
                </div>

                <div className=" mr-4">
                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="cvv">
                        CVV</label>
                    <input className="shadow appearance-none border rounded w-full mr-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="cvv" name="cvv" placeholder="XXX" />
                </div>

                <div className="mx-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Type</label>
                    <select className="w-full" name="type" id="type">
                        <option>Credit</option>
                        <option>Debit</option>
                    </select>
                </div>

            </div>

            <h5 className="font-bold mb-4 text-md">
                Billing Address</h5>
            
            <div className="flex items-center justify-start mb-4">
                <div className="w-1/2 mr-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fnameC">
                        First Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fname" name="fname" placeholder="First name" />
                </div>
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lnameC">
                        Last Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="lname" name="lname" placeholder="Last name" />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetC">
                    Street</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="streetC" name="streetC" placeholder="XXX Example Rd, Apt XX" />
            </div>

            <div className="flex items-center justify-start">
                <div className="mb-6 mr-4 w-2/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityC">
                        City</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="cityC" name="cityC" placeholder="City" />
                </div>

                <div className="mb-6 mx-4 w-1/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stateC">State</label>
                    <select className="w-full" name="stateC" id="stateC">
                        <option>AL</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>NC</option>
                        <option>SC</option>
                        <option>TN</option>
                    </select>
                </div>

                <div className="mb-6 mx-4 w-2/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipC">
                        Zip</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="zipC" name="zipC" placeholder="XXXXX" />
                </div>
            </div>
            <div className ="flex">
                <label className="mr-2">
                    <input type="checkbox" checked={checked} onChange={promoCheck}/> Recieve promo mail?
                </label>

                <button className="w-1/2 md:w-2/5 bg-purple-500 justify-end hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create Account</button>
            </div>
        </form>
        </>
    );
}