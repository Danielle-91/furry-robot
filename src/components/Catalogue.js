import {Link} from 'react-router-dom'

const Catalogue = ({movies}) => {
    return(
        <ul className="catalogue">

        {movies.map((movie) => {
            return (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <img
                            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={`Poster for the movie ${movie.original_title}`}
                        />
                    </Link>
                </li>
            )

        })}
    </ul>
    )
    
}

export default Catalogue;