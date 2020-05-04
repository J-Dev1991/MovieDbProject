import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Single() {
  const API_KEY = "30273ab";
  const { id } = useParams();
  const [single, setSingle] = React.useState([]);
  React.useEffect(() => {
    //start async funtion
    async function getSingleMovie() {
      //start try
      try {
        const response = await fetch(
          // `http://www.omdbapi.com/?s=${id}&apikey=${API_KEY}`
          `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );

        //data filter json
        const datas = await response.json();
        const {
          Title,
          Year,
          Released,
          Plot,
          Poster,
          Actors,
          Writer,
          Language,
        } = datas;
        const newData = [
          { Title, Year, Released, Plot, Poster, Actors, Writer, Language },
        ];

        if (newData.length > 0) {
          setSingle(newData);
        } else {
          setSingle([]);
        }

        //end data filter json
      } catch (error) {
        console.log(error);
      }
      //end try
    }
    getSingleMovie();
    //end async function
  }, [id]);
  //end of use effect
  console.log(single);
  return (
    <section className="section-main">
      {single.map((item, index) => {
        return (
          <div className="main" key={index}>
            <img src={item.Poster} alt={item.Poster} />
            <div className="information">
              <p>Title: {item.Title}</p>
              <p>Actors: {item.Actors}</p>
              <p>Year: {item.Year}</p>
              <p>Released Date{item.Released}</p>
              <p>Plot: {item.Plot}</p>
              <p>Write: {item.Writer}</p>
              <p>Language: {item.Language}</p>
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Single;
