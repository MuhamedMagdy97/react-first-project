import React from "react";

export default function Contact() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-header py-3  text-center">
                <h2 className="pb-2">CONTACT SECTION</h2>
                <div className="shape text-center ">
                  <div className="star ">&#9733;</div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <form className="w-75 mx-auto p-3 mt-3">
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control border-0 border-bottom py-3 mt-2 position-relative"
                />
                <input
                  type="number"
                  placeholder="User Age"
                  className="form-control border-0 border-bottom py-3 mt-2 position-relative"
                />
                <input
                  type="email"
                  placeholder="User Email"
                  className="form-control border-0 border-bottom py-3 mt-2 position-relative"
                />
                <input
                  type="password"
                  placeholder="User Password"
                  className="form-control border-0 border-bottom py-3 mt-2 position-relative"
                />
                <button className="btn btn-success mt-3">Send Massage</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//
