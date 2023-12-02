import React from "react";
import "./shoescard.css";

const ShoesCard = () => {
  return (
    <>
      <div className="container" id="shoes">
        <h3>Shoes</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="shoe1">
              <div className="card w-100">
                <img
                  src="./images/shoes/shoe-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Supply 350</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h6>Price: $100</h6>
                  <a href="#" className="btn btn-primary">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shoe2">
              <div className="card w-100">
                <img
                  src="./images/shoes/shoe-2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">ZOOM 320</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h6>Price: $130</h6>
                  <a href="#" className="btn btn-primary">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shoe3">
              <div className="card w-100">
                <img
                  src="./images/shoes/shoe-3.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Red AIRMAX</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h6>Price: $150</h6>
                  <a href="#" className="btn btn-primary">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesCard;
