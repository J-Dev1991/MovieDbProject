import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="section-main">
      <div className="about">
        <h2 className="about-title">About</h2>
        <div className="underlines"></div>
        <p className="about-text">
          This project was a demo project to check my knowledge in API data
          fetching. I use OMDB API platform to populate my data and also some
          other ready to use API links.. This project is a movie searcher
          project where the query fetch every title that is close in meaning to
          the data requested. Thank yu for checking it out... like i said it's
          just a demo.
        </p>
        <Link to="/">
          <FaWindowClose className="close" />
        </Link>
      </div>
    </section>
  );
}
