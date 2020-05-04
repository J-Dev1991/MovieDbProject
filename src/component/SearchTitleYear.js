import React from "react";

export default function SearchTitleYear({
  handlechange,
  searchs,
  handleTitle,
  handleYear,
  title,
  year,
}) {
  // variables
  // const myKey = "30273ab";
  // const [title, setTitle] = React.useState("");
  // const [year, setYear] = React.useState("");
  // const [details, setDetails] = React.useState([]);
  // const url = `http://www.omdbapi.com/?t=${title}&y=${year}=full&apikey=${myKey}`;
  //   const url = " http://www.omdbapi.com/?i=tt3896198&apikey=30273ab";
  // React.useEffect(() => {
  //   async function getDetails() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       const { Title, Year, Poster, imdbID, Ratings } = data;
  //       const newD = [{ Title, Year, Poster, imdbID, Ratings }];

  //       if (newD) {
  //         const newData = newD.map((item) => {
  //           const { Title, Year, Poster, imdbID } = item;
  //           // const [{ Value }] = Ratings;
  //           return {
  //             title: Title,
  //             year: Year,
  //             img: Poster,
  //             id: imdbID,
  //             // rating: Value,
  //           };
  //         });
  //         setDetails(newData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getDetails();
  // }, [details]);

  return (
    <div>
      <section className="search-section">
        <h2 className="section-title">search Movies</h2>
        <form className="">
          <div className="form-group form-group-setting">
            <div className="label-input-wrap">
              <label htmlFor="name" className="label">
                search
              </label>
              <input
                className="form-control"
                name={searchs}
                type="text"
                id="name"
                value={searchs}
                onChange={handlechange}
                placeholder="search movie"
              />
            </div>
            <div className="label-input-wrap">
              <label htmlFor="name" className="label">
                title
              </label>
              <input
                className="form-control"
                name={title}
                type="text"
                id="name"
                value={title}
                onChange={handleTitle}
                placeholder="movie title"
              />
            </div>
            <div className="label-input-wrap">
              <label htmlFor="name" className="label">
                year
              </label>
              <input
                className="form-control"
                name={year}
                type="number"
                id="name"
                value={year}
                onChange={handleYear}
                placeholder="movie year"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
