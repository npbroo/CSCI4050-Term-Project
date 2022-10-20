import React, { useState, useEffect } from 'react';


export const SelectSeats = () => {

    // array of seats and their status retrieved from database
    // 0 = available
    // 1 = taken
    // 2 = selected to purchase
    const seats_arr = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,1,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]]

    const [seats, setSeats] = useState(seats_arr)
    const [seatsSelected, setSeatsSelected] = useState({})

    const movie = {
        avatar: "https://amc-theatres-res.cloudinary.com/image/upload/c_thumb,f_auto,fl_preserve_transparency,g_face,h_120,q_auto,r_max,w_120/e_trim/v1651174919/amc-cdn/production/2/movies/67400/67369/HeroDesktopDynamic/137913.jpg",
        title: "Top Gun: Maverick",
        theater: "1",
        date: "Today, Sep 22, 2022",
        time: "8:00 PM"
    }

    // updates the occupancy (triggers when a seat is clicked)
    function set_occupancy(row, col) {
        if(seats[row][col] == 0) {
            seats[row][col] = 2
            seatsSelected[`${row}-${col}`]={type:'adult'}
        } else if(seats[row][col] == 2) {
            seats[row][col] = 0
            delete seatsSelected[`${row}-${col}`]
        }
        setSeats([...seats])
        setSeatsSelected({...seatsSelected})
    }

    return (
        <>
        {/* Display movie info */}
        <div className='flex items-center mb-5'>
            <img className='mr-5' src={movie.avatar}/>
            <div>
                <h1 className='text-4xl mb-2'>
                    {movie.title}
                </h1>
                <h1 className='text-2xl'>
                    Theater #{movie.theater} | {movie.date} | {movie.time}
                </h1>
            </div>
        </div>
        
        <h1 className='text-4xl my-5'>
            Seat Selection:
        </h1>
        <div className='mb-5 bg-gray-100 p-5 w-fit'>
            <div className='my-2 bg-gradient-to-b from-black to-white'>
                <br/>
            </div>
            <h2 className='text-center text-lg'>
                Screen
            </h2>
            {/* Map seats array */}
            {seats.map((seat_row, row) => {
                return(
                    <div className='flex' key={`row-${row}`}>
                        {seat_row.map((seat_occupancy, col) => {
                            return(
                                <div key={`${row}-${col}`}>
                                    {seat_occupancy == 0 && <img onClick={() => set_occupancy(row, col)} src="/icons/seat-normal.png" width="80" height="80"/>}
                                    {seat_occupancy == 1 && <img src="/icons/seat-taken.png" width="80" height="80"/>}
                                    {seat_occupancy == 2 && <img onClick={() => set_occupancy(row, col)} src="/icons/seat-selected.png" width="80" height="80"/>}
                                </div>
                            )
                        })}
                    </div>
                )
            })
            }
            {/* Display seat key */}
            <div className='grid grid-cols-3 justify-center mt-10'>
                <div className='flex items-center justify-center'>
                    <img src="/icons/seat-normal.png" width="40" height="40"/><h2 className='text-lg'>= Available</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="/icons/seat-taken.png" width="40" height="40"/><h2 className='text-lg'>= Taken</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="/icons/seat-selected.png" width="40" height="40"/><h2 className='text-lg'>= Selected</h2>
                </div>
            </div>
        </div>

        {/* Display ticket type chooser */}
        {seatsSelected && Object.entries(seatsSelected).length > 0 && Object.keys(seatsSelected).map((key) => {
            console.log(seatsSelected)
            return(
                <div key={`seat_type_${key}`} className='flex'>
                <div>
                    Seat {key}: 
                </div>
                <select  className='ml-5 p-2 bg-gray-100 w-32' id="selected_seat">
                    <option value="Adult">Adult</option>
                    <option value="Child">Child</option>
                </select>
                </div>
            )}
        )}

        
        {/* Continue to checkout */}
        {Object.entries(seatsSelected).length == 0 && 
            <>
            <h2 className='text-lg mb-2'>Please select your seats before you can continue</h2>
            <button className='bold bold-disabled text-2xl'>Continue</button> 
            </>
        }
        {Object.entries(seatsSelected).length == 1 && 
            <>
            <h2 className='text-lg mb-2'>{Object.entries(seatsSelected).length} seat selected</h2>
            <button className='bold text-2xl'>Continue</button> 
            </>
        }
        {Object.entries(seatsSelected).length > 1 && 
            <>
            <h2 className='text-lg mb-2'>{Object.entries(seatsSelected).length} seats selected</h2>
            <button className='bold text-2xl'>Continue</button> 
            </>
        }
        
        
        </>
    );
}