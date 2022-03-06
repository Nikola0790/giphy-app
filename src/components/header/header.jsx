import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <p className="col-1"></p>
            <p className="col-1 ban">Giphy app</p>
            <p className="col-10"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
