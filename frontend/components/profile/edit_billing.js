import React, { useState } from 'react';

export const EditBilling = () => {
    const db_billing= [
        {
            first: "Luna",
            last: "Jenkins",
            card: 1234567890123456,
            exp: 1022,
            cvv: 123,
            type: "Credit",
            address: "Shady Ln",
            city: "Athens",
            state: "GA",
            zip: 30606,
        },
    ]

    const [paymentSelected, set_payment_selected] = useState(-1)
    const [payments, set_payments] = useState(db_billing)
    
    function save_payment(index) {
        var first = document.getElementById('firstBE').value
        var last = document.getElementById('lastBE').value
        var card = document.getElementById('cardE').value
        var exp = document.getElementById('expE').value
        var cvv = document.getElementById('cvvE').value
        var type = document.getElementById('typeE').value
        var address = document.getElementById('addressBE').value
        var city = document.getElementById('cityBE').value
        var state = document.getElementById('stateBE').value
        var zip = document.getElementById('zipBE').value

        payments[index].first = first
        payments[index].last = last
        payments[index].card = card
        payments[index].exp = exp
        payments[index].cvv = cvv
        payments[index].type = type
        payments[index].address = address
        payments[index].city = city
        payments[index].state = state
        payments[index].zip = zip
        set_payments([...payments])
        set_payment_selected(-1)
    }

    function delete_payment(paymentIndex) {
        payments.splice(paymentIndex,1)
        set_payments([...payments])
        set_payment_selected(-1)
    }

    function add_payment() {
        var first = document.getElementById('firstBN').value
        var last = document.getElementById('lastBN').value
        var card = document.getElementById('cardN').value
        var exp = document.getElementById('expN').value
        var cvv = document.getElementById('cvvN').value
        var type = document.getElementById('typeN').value
        var address = document.getElementById('addressBN').value
        var city = document.getElementById('cityBN').value
        var state = document.getElementById('stateBN').value
        var zip = document.getElementById('zipBN').value

        if (card && first && last && exp && cvv && address && city && state && zip) {
            let new_payment = {
                card: card,
                first: first,
                last: last,
                exp: exp,
                cvv: cvv,
                type: type,
                address: address,
                city: city,
                state: state,
                zip: zip
            }
            payments.push(new_payment)
            set_payments([...payments])
        }
    }

    return (
        <>
        <h1 className='text-2xl mb-5'>
            Luna Jenkins' Payments
        </h1>
        <div className='outline outline-2 pb-5'>
            <div className='grid grid-cols-4 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Name</div>
                <div className='text-xl mb-2'>Card</div>
                <div className='text-xl mb-2'>Address</div>
            </div>
            {payments && payments.length > 0 && payments.map((payment, index) => {
                return(
                    <>
                    <div key={`manage_movie_${index}`} className='grid grid-cols-4 px-5'>
                        {}
                        {index != paymentSelected &&
                            <>
                            <div className='text-xl mb-2'>{payment.first} {payment.last}</div>
                            <div className='text-xl mb-2'>{payment.card} <br></br> {payment.exp} {payment.cvv} {payment.type}</div>
                            <div className='text-xl mb-2'>{payment.address} <br></br> {payment.city} {payment.state} {payment.zip}</div>
                            {paymentSelected == -1 &&
                            <>
                                <div className='text-xl mb-2 mr-2 text-blue-500 underline' onClick={() => set_payment_selected(index)}>edit</div>
                                <div className='text-xl mb-2 float-right text-red-500 underline' onClick={() => delete_payment(index)}>delete</div>
                            </>
                            }
                            </>
                        }

                        {index == paymentSelected &&
                        <>
                            <div className='flex'>
                                <input placeholder="First" defaultValue={payment.first} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="firstBE"/>
                                <input placeholder="Last" defaultValue={payment.last} className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="lastBE"/>
                            </div>
                            <input placeholder="xxxxxxxxxxxx" defaultValue={payment.card} className='mr-5 p-2 bg-gray-100 ' type="text" id="cardE"/>
                            <input placeholder="XXX Name Ln" defaultValue={payment.address} className='mr-5 p-2 bg-gray-100 ' type="text" id="addressBE"/>
                            <div className='flex'>
                                <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => set_payment_selected(-1)}>cancel</div>
                                <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_payment(index)}>save</div>
                                <div className='text-xl mb-2 float-right text-red-500 underline' onClick={() => delete_payment(index)}>delete</div>
                            </div>
                            <div></div>
                            <div className='flex'>
                                <input placeholder="MMYY" defaultValue={payment.exp} className='w-1/3 mr-5 p-2 bg-gray-100' type="text" id="expE"/>
                                <input placeholder="XXX" defaultValue={payment.cvv} className='w-1/3 mr-5 p-2 bg-gray-100' type="text" id="cvvE"/>
                                <select className="w-1/3 mr-5 p-2 bg-gray-100" name="type" id="typeE">
                                    <option>Credit</option>
                                    <option>Debit</option>
                                </select>
                            </div>
                            <div className='flex'>
                               <input placeholder="City" defaultValue={payment.city} className='w-2/5 mr-5 p-2 bg-gray-100' type="text" id="cityBE"/>
                                <select className="mr-5 p-2 bg-gray-100" name="state" id="stateBE">
                                    <option>AL</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>NC</option>
                                    <option>SC</option>
                                    <option>TN</option>
                                </select>
                                <input placeholder="XXXXX" defaultValue={payment.zip} className='w-2/5 mr-5 p-2 bg-gray-100' type="text" id="zipBE"/>
                            </div>
                        </>
                        }
                    </div>
                    </>
                )                
            })
            }

            {/* add new user editor*/}
            {paymentSelected == -1 && payments.length < 3 &&
                <div className='grid grid-cols-4 px-5'>
                    <div className='flex'>
                        <input placeholder="First" className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="firstBN"/>
                        <input placeholder="Last" className='mr-5 p-2 bg-gray-100 w-1/2' type="text" id="lastBN"/>
                    </div>
                    <input placeholder="xxxxxxxxxxxx" className='mr-5 p-2 bg-gray-100 ' type="text" id="cardN"/>
                    <input placeholder="XXX Name Ln" className='mr-5 p-2 bg-gray-100 ' type="text" id="addressBN"/>
                    <div className='text-xl mb-2 text-green-500 underline' onClick={() => add_payment()}>add new payment method</div>
                    <div></div>
                    <div className="flex"> 
                        <input placeholder="MMYY" className='w-1/3 mr-5 p-2 bg-gray-100' type="text" id="expN"/>
                        <input placeholder="XXX" className='w-1/3 mr-5 p-2 bg-gray-100' type="text" id="cvvN"/>
                        <select className="w-1/3 mr-5 p-2 bg-gray-100" name="type" id="typeN">
                            <option>Credit</option>
                            <option>Debit</option>
                        </select>
                    </div>
                    <div className="flex"> 
                    <input placeholder="City" className='w-2/5 mr-5 p-2 bg-gray-100' type="text" id="cityBN"/>
                        <select className="mr-5 p-2 bg-gray-100" name="state" id="stateBN">
                            <option>AL</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>NC</option>
                            <option>SC</option>
                            <option>TN</option>
                        </select>
                        <input placeholder="XXXXX" className='w-2/5 mr-5 p-2 bg-gray-100' type="text" id="zipBN"/>
                    </div>
                </div>
            }
        </div>
        


        </>
    );
}