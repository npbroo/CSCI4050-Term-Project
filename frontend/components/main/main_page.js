import React, {useState} from 'react';

export const MainPage = () => {
    const db_coming =
    [
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1654093399/amc-cdn/production/2/movies/66800/66765/PosterDynamic/138993.jpg",
            title: "Avatar: The Way of Water",
            length: 180,
            rating: "PG-13",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662466631/amc-cdn/production/2/movies/70100/70149/PosterDynamic/142564.jpg",
            title: "Joker: Folie a Deux",
            length: 98,
            rating: "R",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
            title: "Despicable Me 4",
            length: 135,
            rating: "PG",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662137861/amc-cdn/production/2/movies/70600/70588/PosterDynamic/142476.jpg",
            title: "Knock at the Cabin",
            length: 108,
            rating: "R",
        }
    ]

    const db_now =
    [
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1654093399/amc-cdn/production/2/movies/66800/66765/PosterDynamic/138993.jpg",
            title: "Bullet Train",
            length: 126,
            rating: "R",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662466631/amc-cdn/production/2/movies/70100/70149/PosterDynamic/142564.jpg",
            title: "See How They Run",
            length: 98,
            rating: "PG13",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
            title: "The Woman King",
            length: 135,
            rating: "PG13",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662137861/amc-cdn/production/2/movies/70600/70588/PosterDynamic/142476.jpg",
            title: "Pearl",
            length: 102,
            rating: "R",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1653736847/amc-cdn/production/2/movies/67400/67369/Poster/Primary_BoxCover_800_1200.jpg",
            title: "Top Gun: Maverick",
            length: 131,
            rating: "PG13",
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1660671932/amc-cdn/production/2/movies/55700/55685/OnDemandPoster/141739.jpg",
            title: "DC League of Super Pets",
            length: 105,
            rating: "PG",
        }
    ]

    const [display, setDisplay] = useState(0)

    function get_movie_length_str(minutes) {
        minutes = parseInt(minutes)
        let hrs = parseInt(minutes/60)
        let mins = minutes - (hrs*60)
        let str = ''
        if (hrs > 0) {
            str = `${hrs} HR`
        }
        if (mins > 0) {
            str += ` ${mins} MIN`
        }
        return str
    }


    return (
        <>
        <nav className='grid grid-cols-4 bg-blue-300 py-5 justify-items-center shadow'>
        <h2 className='text-xl'>Home</h2>
        <h2 className='text-xl'>Search</h2>
        <h2 className='text-xl'>About</h2>
        <h2 className='text-xl'>Profile</h2>
      </nav>
      <img src="https://png.pngtree.com/template/20220516/ourlarge/pngtree-cinema-banner-with-of-movie-elements-poster-image_1585781.jpg" className='w-full'></img>
        
        <div className='flex justify-center bg-blue-300 py-5'>
            <button className="bold mx-5 text-2xl" onClick={() => setDisplay(0)}>Now Playing</button>
            <button className="bold mx-5 text-2xl" onClick={() => setDisplay(1)}>Coming Soon</button>
        </div>
        <div className='flex flex-wrap justify-center bg-blue-200'>
            {display == 0  && db_now && db_now.length > 0 && db_now.map((movie, index) => {
                return(
                    <div key={index} className='text-center m-5'>
                        <img src={movie.src}/>
                        <h2 className='text-3xl mb-2'>{movie.title}</h2>
                        <h2 className='text-xl mb-2'>{get_movie_length_str(movie.length)} | {movie.rating}</h2>
                        <button className='bold text-2xl'>Get Tickets</button>
                    </div>
                )
            })
            }
            {display == 1  && db_coming && db_coming.length > 0 && db_coming.map((movie, index) => {
                return(
                    <div key={index} className='text-center m-5'>
                        <img src={movie.src}/>
                        <h2 className='text-3xl mb-2'>{movie.title}</h2>
                        <h2 className='text-xl mb-2'>{get_movie_length_str(movie.length)} | {movie.rating}</h2>
                        <h2 className='text-3xl mb-2'>Expected Release: 2024</h2>
                    </div>
                )
            })
            }
        </div>

        </>
    );
}