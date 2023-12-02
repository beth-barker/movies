import React from 'react';
import Nav from './Nav';
import '../styles/movies.css'

function Movies(props) {

    const genreArr = ['Romance', 'Horror', 'Comedy', 'Thriller', 'Action', 'Crime', 'Classics', 'Sports', 'Holiday']

    let movieArr = [
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 'R',
            length: '2h 22m',
            imdbRate: '9.3',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlK2h13ZxKAuWD4IUAQdOHolyE9xj4h-cW1ttEUgw74kp7ztTlbjrpuStEwKAKfPNFNeY&usqp=CAU'
        },
        {
            title: 'The Godfather',
            year: 1972,
            rating: 'R',
            length: '2h 55m',
            imdbRate: '9.2',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mXzqAIzS5FscNdmwsnUJgsOR1Z9PltRAbQ&usqp=CAU'

        }, {
            title: 'The Dark Knight',
            year: 2008,
            rating: 'PG-13',
            length: '2h 22m',
            imdbRate: '9.3',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFRq5mjbpjTtcOj8_xLsGU2phwsJUeTWD0g&usqp=CAU'
        },
        {
            title: 'Coco',
            year: 2017,
            rating: 'PG',
            length: '1h 45m',
            imdbRate: '8.4',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYN5qm_umSQ7nZmHBrv_0JBxGiO44ZI-T5g&usqp=CAU'
        },
        {
            title: 'The Help',
            year: 2011,
            rating: 'PG-13',
            length: '2h 26m',
            imdbRate: '8.1',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mvFRGfIl46xsUaUNG44Feg3kAvffasTsH0c4BunaRutlh9XOV6_Nowteh70-bYsN34I&usqp=CAU'
        }
]

    
    return (
        <div>
            <Nav/>
            <div>
                <h1>Movies</h1>
                <input placeholder='Search Movies'/> <br />
                <select>
                    <option hidden>Genre</option>
                    {genreArr.map((genre) => <option>{genre}</option>)}
                </select>
                <select name="" id="">
                    <option hidden>Rating</option>
                    <option value="">G</option>
                    <option value="">PG</option>
                    <option value="">PG-13</option>
                    <option value="">R</option>
                </select>
            </div>
            <div className='cards'>
                {movieArr.map((movie) => (
                    <div className='movie-card'>
                        <h1>{movie.title}</h1>
                        <img className='poster' src={movie.poster} alt="" />
                        <p>{movie.rating}</p>
                        <p>{movie.year}</p>
                        <p>{movie.length}</p>
                        <button>Watched</button>
                        <button>Want to Watch</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;