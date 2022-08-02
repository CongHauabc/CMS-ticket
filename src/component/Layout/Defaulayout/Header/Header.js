import React, { Children } from "react";
import img6 from "~/asset/img/search.png";
import img7 from "~/asset/img/email.png";
import img8 from "~/asset/img/notif.png";
import img9 from "~/asset/img/user.png";
import "./Menu.css";
import { Col, Row } from "antd";
function Header() {
  return (
   
      <div className="menu2">
        <div>
          <input type="search" placeholder="Search" className="search" />
          <img src={img6} className="searchimg" />
        </div>
        <div className="menu3">
          <img src={img7} className="emailimg" />
          <img src={img8} className="emailimg" />
          <img src={img9} className="emailimg" />
        </div>
      </div>
   
  );
}

export default Header;
