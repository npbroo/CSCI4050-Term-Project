export const CheckoutForm = () => {

    const loginCheck = async (event) => {
        event.preventDefault(); 
    }
    return (
        <>
        <h1 className="font-bold mb-4">
            Checkout Form
        </h1>
        <form className="max-w-3/5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginCheck}>
            <h5 className="font-bold mb-4 text-md">
                Payment Method
            </h5>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="autofill">Select Saved Payment Method</label>
                    <select className="w-full" name="autofill" id="autofill">
                        <option>-------</option>
                        <option>Card ending in 7890</option>
                        <option>Card ending in 1234</option>
                    </select>
            <div className="mb-4">
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="promo">
                    Promotional Code</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="promo" name="promo" placeholder="your code here" />
            </div>

            <div className="border border-black">
                <div className="flex text-gray-600 text-xs font-bold mx-2 my-2 justify-between">
                    <p>Sub-Total:</p> <p>$32.00</p>
                </div>
                <div className="flex text-gray-600 text-xs font-bold mx-2 mb-2 justify-between">
                    <p>Tax:</p> <p>$3.31</p>
                </div>
                <div className="flex text-gray-600 text-xs font-bold mx-2 mb-10 justify-between">
                    <p>Total:</p> <p>$35.31</p>
                </div>

                <button className="mx-2 bg-purple-500 hover:bg-purple-700 text-white font-bold mb-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Checkout</button>
            </div>   
        </form>
        </>
    );
}