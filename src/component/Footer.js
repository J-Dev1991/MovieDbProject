import React from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGooglePlus,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <FaLinkedin className="linkd" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <FaTwitterSquare className="twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <FaGooglePlus className="google" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <FaInstagramSquare className="insta" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <FaFacebookSquare className="facebook" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href=""> Ajibola Oshikoya</a>
      </div>
    </footer>
  );
}
