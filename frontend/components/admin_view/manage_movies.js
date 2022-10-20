import React, { useState, useEffect } from 'react';

export const ManageMovies = () => {
    // to be pulled in from the database/ backend
    const db_movies = [
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1654093399/amc-cdn/production/2/movies/66800/66765/PosterDynamic/138993.jpg",
            title: "Bullet Train",
            length: 126,
            rating: "R",
            category: "action",
            director: "David Leitch",
            producer: "Zac Olkewicz",
            cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"],
            synopsis: "Five assassins aboard a fast moving bullet train find out their missions have something in common.",
            showtimes: [{date:"2022-09-20", time:"20:00"}, {date:"2022-10-20", time:"16:00"}]
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662466631/amc-cdn/production/2/movies/70100/70149/PosterDynamic/142564.jpg",
            title: "See How They Run",
            length: 98,
            rating: "PG13",
            category: "mystery",
            cast: [],
            showtimes: []
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
            title: "The Woman King",
            length: 135,
            rating: "PG13",
            category: "drama",
            cast: [],
            showtimes: []
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662137861/amc-cdn/production/2/movies/70600/70588/PosterDynamic/142476.jpg",
            title: "Pearl",
            length: 102,
            rating: "R",
            category: "horror",
            cast: [],
            showtimes: []
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1653736847/amc-cdn/production/2/movies/67400/67369/Poster/Primary_BoxCover_800_1200.jpg",
            title: "Top Gun: Maverick",
            length: 131,
            rating: "PG13",
            category: "action",
            cast: [],
            showtimes: []
        },
        {
            src: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1660671932/amc-cdn/production/2/movies/55700/55685/OnDemandPoster/141739.jpg",
            title: "DC League of Super Pets",
            length: 105,
            rating: "PG",
            category: "adventure",
            cast: [],
            showtimes: []
        }
    ]

    const [movieSelected, set_movie_selected] = useState(null) // index of the selected movie
    const [movies, set_movies] = useState(db_movies) // stateful storage of movies
    const [tempShowtimes, set_temp_showtimes] = useState(null) // temporary showtime storage (for use in advanced editor) this is copied to movies array upon save
    const [tempCast, set_temp_cast] = useState(null) // temporary cast storage (for use in advanced editor) this is copied to movies array upon save
    
    // select movie (when you click the edit button next to a movie)
    function select_movie(movie_index) {
        set_movie_selected(movie_index)
        set_temp_showtimes([...movies[movie_index].showtimes])
        set_temp_cast([...movies[movie_index].cast])
    }
    
    // save movie edits (when you click the save button)
    function save_movie(index) {
        var title = document.getElementById('selected_title').value
        var length = document.getElementById('selected_length').value
        var rating = document.getElementById('selected_rating').value
        var category = document.getElementById('selected_category').value
        var director = document.getElementById('selected_director').value
        var producer = document.getElementById('selected_producer').value
        var synopsis = document.getElementById('selected_synopsis').value
        var src = document.getElementById('selected_image_src').value
        var trailer = document.getElementById('selected_trailer_src').value

        movies[index].title = title
        movies[index].length = parseInt(length)
        movies[index].rating = rating
        movies[index].category = category
        movies[index].director = director
        movies[index].producer = producer
        movies[index].synopsis = synopsis
        movies[index].src = src
        movies[index].trailer = trailer

        movies[index].showtimes = tempShowtimes
        movies[index].cast = tempCast
        set_movies([...movies])
        set_movie_selected(null)
        // This is when you would save to the database
    }

    // delete a movie (when you click the delete button)
    function delete_movie(movie_index) {
        movies.splice(movie_index,1)
        set_movies([...movies])
        set_movie_selected(null)
        // This is where you would delete from database
    }

    // add a movie (when you fill out the add new movie form)
    function add_movie() {
        var title = document.getElementById('new_title').value
        var length = document.getElementById('new_length').value
        var rating = document.getElementById('new_rating').value
        if (title && length > 0 && rating) {
            let new_movie = {
                src:null,
                title: title,
                length: parseInt(length),
                rating: rating,
                cast: [],
                showtimes: [],
            }
            movies.push(new_movie)
            set_movies([...movies])
        }
        // This is where you would save to the database
    }

    // TEMP SHOWTIME HELPERS
    // deletes a showtime (from temporary showtimes)
    function delete_showtime(showtime_index) {
        tempShowtimes.splice(showtime_index,1)
        set_temp_showtimes([...tempShowtimes]) // create deep copy
    }
    // adds a showtime (to temporary showtimes)
    function add_showtime() {
        var showtime = document.getElementById('new_showtime').value
        var showdate = document.getElementById('new_showdate').value
        if(showtime && showdate) {
            tempShowtimes.push({date:showdate, time:showtime})
            set_temp_showtimes([...tempShowtimes])
            document.getElementById('new_showtime').value = ""
            document.getElementById('new_showdate').value = ""
        }
    }
    // updates a showtime (on update function when a showtime is edited)
    function update_showtime(showtime_index) {
        var showtime = document.getElementById(`showtime_${showtime_index}`).value
        var showdate = document.getElementById(`showdate_${showtime_index}`).value
        if(showtime && showdate) {
            tempShowtimes[showtime_index] = {date:showdate, time:showtime}
            set_temp_showtimes([...tempShowtimes])
        }
    }

    // TEMP CAST MEMBER HELPERS
    // deletes a cast member (from temporary cast)
    function delete_cast_member(member_index) {
        tempCast.splice(member_index,1)
        set_temp_cast([...tempCast]) // create deep copy
    }
    // adds a showtime (to temporary showtimes)
    function add_cast_member() {
        var cast_member = document.getElementById('new_cast_member').value
        if(cast_member) {
            tempCast.push(cast_member)
            set_temp_cast([...tempCast])
            document.getElementById('new_cast_member').value = ""
        }
    }
    // updates a cast member (on update function when a cast member is edited)
    function update_cast_member(member_index) {
        var cast_member = document.getElementById(`cast_member_${member_index}`).value
        if(cast_member) {
            tempCast[member_index] = cast_member
            set_temp_cast([...tempCast])
        }
    }

    return (
        <>
        <h1 className='text-2xl mb-5'>
            Manage Movies
        </h1>
        <div className='outline outline-2 pb-5'>
            {/* display chart header */}
            <div className='grid grid-cols-4 px-5 py-2 bg-gray-200 mb-5'>
                <div className='text-xl mb-2'>Title</div>
                <div className='text-xl mb-2'>Length (MIN)</div>
                <div className='text-xl mb-2'>Rating</div>
            </div>

            {/* Map the movie info to a flex box if the array exists and the length > 0 */}
            {movies && movies.length > 0 && movies.map((movie, index) => {
                return(
                    <div key={`manage_movie_${index}`}>
                    <div className='grid grid-cols-4 px-5'>
                        {/* if movie is not selected, display basic movie info */}
                        {index != movieSelected &&
                            <>
                            <div className='text-xl mb-2'>{movie.title}</div>
                            <div className='text-xl mb-2'>{movie.length}</div>
                            <div className='text-xl mb-2'>{movie.rating}</div>
                            {movieSelected == null &&
                                <div className='text-xl mb-2 text-blue-500 underline' onClick={() => select_movie(index)}>edit</div>
                            }
                            </>
                        }

                        {/* else, if movie is selected, replace basic movie info with the basic movie editor */}
                        {index == movieSelected &&
                        <>
                            <input placeholder="Movie Title" defaultValue={movie.title} className='mr-5 p-2 bg-gray-100' type="text" id="selected_title"/>
                            <input placeholder="0" defaultValue={movie.length} min="0" className='mr-5 p-2 bg-gray-100' type="number" id="selected_length"/>
                            <select defaultValue={movie.rating} className='mr-5 p-2 bg-gray-100' id="selected_rating">
                                <option value="G">G</option>
                                <option value="PG">PG</option>
                                <option value="PG13">PG13</option>
                                <option value="R">R</option>
                            </select>
                            <div className='flex'>
                                <div className='text-xl mb-2 text-blue-500 underline mr-2' onClick={() => set_movie_selected(null)}>cancel</div>
                                <div className='text-xl mb-2 text-green-500 underline mr-2' onClick={() => save_movie(index)}>save</div>
                            </div>
                        </>
                        }
                    </div>
                    
                    {/* if the movie is selected, display advanced editor*/}
                    {index == movieSelected &&
                    <div className='my-5'>

                        {/* view movie image/ trailer editor */}
                        <div className='bg-gray-100 pb-2 text-lg mx-5 mb-5'>
                            <div className='bg-gray-200 p-2 mb-2'>Media:</div>
                            <div className="px-2">
                                <img src={movie.src} width="100"></img>
                                <div>Image Source:</div>
                                <input defaultValue={movie.src} className='mr-5 p-2 bg-white-100 rounded-lg w-full' type="text" id="selected_image_src"/>
                                <div className='text-xl underline text-end text-blue-500' onClick={() => alert("Not implemented")}>upload image</div>
                            </div>
                            <div className="px-2">
                                <div>Trailer Source:</div>
                                <input defaultValue={movie.trailer} className='mr-5 p-2 bg-white-100 rounded-lg w-full' type="text" id="selected_trailer_src"/>
                                <div className='text-xl underline text-end text-blue-500' onClick={() => alert("Not implemented")}>upload trailer</div>
                            </div>
                        </div>
                        
                        {/* movie category/ cast/ synopsis editor */}
                        <div className='bg-gray-100 pb-2 text-lg mx-5 mb-5'>

                            {/* director and producer fields */}
                            <div className='bg-gray-200 p-2 mb-2'>About:</div>
                            <div className='p-2'>
                                <div>Category:</div>
                                <input defaultValue={movie.category} className='mr-5 p-2 bg-white-100 rounded-lg' type="text" id="selected_category"/>
                            </div>
                            <div className='p-2'>
                                <div>Director:</div>
                                <input defaultValue={movie.director} className='mr-5 p-2 bg-white-100 rounded-lg' type="text" id="selected_director"/>
                            </div>
                            <div className='p-2'>
                                <div>Producer:</div>
                                <input defaultValue={movie.producer} className='mr-5 p-2 bg-white-100 rounded-lg' type="text" id="selected_producer"/>
                            </div>

                            {/* cast member editor (to allow for editing multiple cast members) */}
                            <div className='p-2'>
                                <div>Cast:</div>
                                {tempCast.map((cast_member, i) => {
                                    return (
                                        <div key={`movie_${index}_showtime_${i}`} className='flex mb-2' >
                                            <input defaultValue={cast_member} onChange={() => update_cast_member(i)} className='p-2 bg-white mr-2' type="text" id={`cast_member_${i}`}/>
                                            <div className='ml-5 text-sm mb-2 text-red-500 underline' onClick={() => delete_cast_member(i)}>delete</div>
                                        </div>
                                    )
                                })}
                                <div className='flex'>
                                    <input placeholder="New Cast Member" className='p-2 bg-white mr-2' type="text" id={'new_cast_member'}/>
                                    <div className='ml-5 text-sm mb-2 text-green-500 underline' onClick={() => add_cast_member()}>add</div>
                                </div>

                            </div>
                            
                            {/* synopsis field */}
                            <div className='p-2'>
                                <div>Synopsis:</div>
                                <textarea defaultValue={movie.synopsis} rows="5" className='block w-full mr-5 p-2 bg-white-100 rounded-lg' type="text" id="selected_synopsis"/>
                            </div>
                        </div>

                        {/* movie showtimes editor (to allow for editing multiple showtimes/dates) */}
                        <div className='mx-5 bg-gray-100  pb-2 text-lg '>
                            <div className='bg-gray-200 p-2 mb-2 '>Showtimes:</div>
                            {tempShowtimes.map((showtime, i) => {
                                return (
                                    <div key={`movie_${index}_showtime_${i}`} className='ml-5 flex items-center mb-1'>
                                        <input defaultValue={showtime.date} onChange={() => update_showtime(i)} className='p-2 bg-white mr-2' type="date" id={`showdate_${i}`}/>
                                        <input defaultValue={showtime.time} onChange={() => update_showtime(i)} className='p-2 bg-white' type="time" id={`showtime_${i}`}/>
                                        <div className='ml-5 text-sm mb-2 text-red-500 underline' onClick={() => delete_showtime(i)}>delete</div>
                                    </div>
                                )
                            })}
                            <div className='ml-5 flex items-center'>
                                <input defaultValue="new" className='p-2 bg-white mr-2' type="date" id="new_showdate"/>
                                <input defaultValue="new" className='p-2 bg-white' type="time" id="new_showtime"/>
                                <div className='ml-5 text-sm mb-2 text-green-500 underline' onClick={() => add_showtime()}>add</div>
                            </div>
                        </div>

                        {/* delete movie button */}
                        <div className='mx-5 mb-10'>
                            <div className='text-xl float-left text-blue-500 underline' onClick={() => alert("Not implemented")}>edit reviews</div>
                            <div className='text-xl float-right text-red-500 underline' onClick={() => delete_movie(index)}>delete movie</div>
                        </div>
                    </div>
                    }
                    
                    </div>
                )
            })
            }

            {/* add new movie editor*/}
            {movieSelected == null &&
                <div className='grid grid-cols-4 px-5'>
                    <input placeholder="Movie Title" className='mr-5 p-2 bg-gray-100' type="text" id="new_title" />
                    <input placeholder="0" min="0" className='mr-5 p-2 bg-gray-100' type="number" id="new_length" />
                    <select placeholder="G" className='mr-5 p-2 bg-gray-100' id="new_rating">
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG13">PG13</option>
                        <option value="R">R</option>
                    </select>
                    <div className='text-xl mb-2 text-green-500 underline' onClick={() => add_movie()}>add new movie</div>
                </div>
            }
        </div>
        </>
    );
}