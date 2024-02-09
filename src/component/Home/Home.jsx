import React from "react";
import avatar from "../images/avatar.svg";
export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-img d-flex justify-content-center align-items-center pb-2">
                <img src={avatar} alt="Avatar" className="w-25 " />
                <br />
              </div>
              <div className="content-text m-2 pt-2 ">
                <h2 className="text-center mb-3 ">START FRAMEWORK</h2>
                <div className="shape text-center ">
                  <div className="star ">&#9733;</div>
                </div>
                <p className="text-center mt-3 ">
                  Graphic Artist - Web Designer - Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
