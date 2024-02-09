// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import  '../Footer/Footer.css'
library.add(fab, faFacebook);

const Footer = () => {
  return (
    <footer className="footer overflow-hidden pt-5 ">
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="location py-3">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location py-3">
                <h3 className="pb-3">AROUND THE WEB</h3>
                <div className="icons">
                  <ul className="list-unstyled d-flex justify-content-center align-items-center">
                    <li>
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon="fa-brands fa-x-twitter"
                        size="lg"
                        className="ps-3"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        size="lg"
                        className="ps-3"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon="fa-brands fa-square-instagram"
                        size="lg"
                        className="ps-3"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location py-3">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-new-footer py-3 ">
          <div className="col-md-12">
            <div className="copy-rights">
              <p className="lead">Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
