import Link from 'next/link';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';


export const SelectShowtime = () => {

    const [showtime_i, setshowtime_i] = useState(null) //stores all of the product data which is retrieved from the database

    // to be pulled in from the database/ backend
    const movie = {
        avatar: "https://amc-theatres-res.cloudinary.com/image/upload/c_thumb,f_auto,fl_preserve_transparency,g_face,h_120,q_auto,r_max,w_120/e_trim/v1651174919/amc-cdn/production/2/movies/67400/67369/HeroDesktopDynamic/137913.jpg",
        trailer: "trailer.mp4", //random src
        title: "Top Gun: Maverick",
        length: "2 HR 11 MIN",
        rating: "PG13",
    }
    
    // to be pulled in from the database/ backend
    const showtimes = [
        "2:00 PM",
        "3:00 PM",
        "5:00 PM",
        "6:30 PM",
        "8:00 PM"
    ]

    // function to set the showtime on click
    function set_showtime(index) {
        console.log(`setting showtime to: ${index}`)
        if (index == showtime_i){
            setshowtime_i(null)
        } else {
            setshowtime_i(index)
        }
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
                    {movie.length} | {movie.rating}
                </h1>
            </div>
        </div>
        {/* Display trailer */}
        <video width="1080" height="720" controls>
            <source src={movie.trailer} type="video/mp4"></source>
        </video>
        {/* Displays today's showtimes */}
        <h1 className='text-4xl my-5'>
            Today's Showtimes:
        </h1>
        <div className='flex flex-wrap mb-5 bg-gray-100 p-5'>
            {/* Map the showtimes to a flex box if the array exists and the length > 0 */}
            {showtimes && showtimes.length > 0 && showtimes.map((time, index) => {
                return(
                    <div key={index} className='text-center mr-5 my-2'>
                        {/* If statement */}
                        {showtime_i != null && showtime_i == index
                        ?
                        <button onClick={() => set_showtime(index)} className='showtimes showtime-selected text-2xl'>{time}</button>
                        :
                        <button onClick={() => set_showtime(index)} className='showtimes showtime-unselected text-2xl'>{time}</button>
                        }
                    </div>
                )
            })
            }
        </div>
        {/* Continue to the next page */}
        
        {showtime_i == null && 
            <>
            <h2 className='text-lg mb-2'>Please select your showtime before you can continue</h2>
            <button className='bold bold-disabled text-2xl'>Continue</button>
            </>
        }
        {showtime_i != null && 
            <>
            <h2 className='text-lg mb-2'>You have selected the {showtimes[showtime_i]} showing</h2>
            <button className='bold text-2xl'>Continue</button>
            </>
        }
        </>
    );
}