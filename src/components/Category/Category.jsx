import React from "react";
import "./category.css";

const Category = () => {
  return (
    <>
      <div className="container category">
        <div className="row">
          <div className="col-md-4 mb-2">
            <div className="cat1 d-flex justify-content-between align-items-center">
              <h3>Watch</h3>
              <img
                className="image"
                src="./images/categories/watch.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="cat2 d-flex justify-content-between align-items-center">
              <h3>Bag</h3>
              <img className="image" src="./images/categories/bag.png" alt="" />
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="cat3 d-flex justify-content-between align-items-center">
              <h3>Shoe</h3>
              <img
                className="image"
                src="./images/categories/shoes.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
