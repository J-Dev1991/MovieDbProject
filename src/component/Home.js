import React from "react";
import Nav from "./Nav";
import MList from "./Movielist";
// import Searching from "./SearchMovie";
import Footer from "./Footer";
import SearchFilter from "./SearchTitleYear";

function Home() {
  // const [loading, setLoading] = React.useState(false);
  const [movies, setMovie] = React.useState([]);
  const [searchs, setSearch] = React.useState("");
  const API_KEY = "30273ab";
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  // const url = `http://www.omdbapi.com/?s=${searchs}&apikey=${API_KEY}`;
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchs}&t=${title}&y=${year}`;

  React.useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(url);

        const data = await response.json();
        const { Search } = data;
        if (Search) {
          const SearchedMovie = Search.map((item) => {
            const { Title, Year, Poster, imdbID } = item;
            return { id: imdbID, title: Title, year: Year, img: Poster };
          });
          setMovie(SearchedMovie);
        } else {
          setMovie([]);
          return <h2>CAN'T FIND THE SEARCHED MOVIE</h2>;
        }
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [searchs, title, year, url]);

  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleTitle = (e) => {
    console.log(e.target.value);

    setTitle(e.target.value);
  };
  return (
    <main>
      <Nav />
      <div className="film embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          // src="https://www.youtube.com/embed/vlDzYIIOYmM"
          src="https://www.youtube.com/embed/BUPxk5VMB8g?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      {/* <Searching /> */}
      <SearchFilter
        searchs={searchs}
        handlechange={handlechange}
        handleTitle={handleTitle}
        handleYear={handleYear}
        title={title}
        year={year}
      />
      <MList movies={movies} />
      <Footer />
    </main>
  );
}

export default Home;
