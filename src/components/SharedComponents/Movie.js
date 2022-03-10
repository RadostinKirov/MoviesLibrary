

const Movie = () => {


    return (
        <section className="movie">

        <a href="#" className="img-container">
          <img src="https://m.media-amazon.com/images/I/516DXKVRKKL.jpg" alt="The Pink Panther" />
        </a>
        <div className="movie-info">
          <a href="#" className="movie-title">Movie Title (2009)</a>
          <div>
            <p className="genre">Drama, Thriller, Comedy</p>
            <p className="duration">90minutes</p>
          </div>
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae
            beatae esse cupiditate, quae aspernatur aliquam provident similique quas. Vitae quos nihil
            pariatur magnam perspiciatis numquam doloribus voluptate, error saepe?</p>
          <a href="#" className="official-site">Visit official site</a>
          <button className="add-to-favorites">Add to Favorites</button>
        </div>
      </section>

    )
}

export default Movie;