import Link from 'next/link';
import Image from 'next/image'


export const SelectMovie = () => {

    // to be pulled in from the database/ backend
    const db_movies = [
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

    function get_movie_length_str(minutes) {
        minutes = parseInt(minutes) // just in case minutes is passed in as a string
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
        <h1 className='text-4xl mb-5 text-center'>
            Movies Playing
        </h1>
        <div className='flex flex-wrap justify-center'>
            {/* Map the movies to a flex box if the array exists and the length > 0 */}
            {db_movies && db_movies.length > 0 && db_movies.map((movie, index) => {
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
        </div>
        </>
    );
}