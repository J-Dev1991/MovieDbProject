import React from "react";
import Movie from "./Movie";
function Movielist({ movies }) {
  return (
    <section className="movie-list">
      <ul className="movie-list-display">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </ul>

      <div className="advertDiv">
        {/* <div className="texts">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact
        </div> */}

        <div className="kswilanow">
          <div className="ks-logo ">
            <img
              src="https://lh4.googleusercontent.com/-aotS0ygfSCc/AAAAAAAAAAI/AAAAAAAAAAA/o4VvUsQe1Hg/s39-p-k-no-ns-nd/photo.jpg"
              alt="ks logo"
            />
            <h3 className="ks title">Ks Wilanow Football Club</h3>
          </div>

          <div className="class2006 h4">
            <h4>senior team preseason</h4>
            <iframe
              src="https://www.youtube.com/embed/TKNZPzU86oQ?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
          <div className="kswilanow-training">
            <h4 className="h4">Junior team training </h4>
            <iframe
              src="https://www.youtube.com/embed/n5IvKJNp2WI?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movielist;
