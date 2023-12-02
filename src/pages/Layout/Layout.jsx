import React from "react";

const Layout = () => {
  return (
    <>
      <h2>Display flex</h2>
      <div className="container">
        <div
          style={{ height: "100px", backgroundColor: "pink" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>Ruhul</div>
          <div>Amin</div>
          <div>Armina</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
