import React from "react";
import logo from "~/asset/img/logo.png";
import img1 from "~/asset/img/ve.png";
import img2 from "~/asset/img/doive.png";
import img3 from "~/asset/img/DS.png";
import img4 from "~/asset/img/qltb.png";
import img5 from "~/asset/img/setting.png";
import { NavLink, Link, useRoutes } from "react-router-dom";
import alta from "~/asset/img/alta.png"
import home from "~/asset/img/home.png";

import "antd/dist/antd.css";
import "./Menu.css";
import { Col, Row } from "antd";

<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
></link>;

function Menu() {
  return (
    <Col span={5} pull={19}>
      <menu className="menu">
        <img src={logo} className="logo" id="logo" />
        <div className="home">
          <ul>
            <li className="limenu" id="limenu">
              <NavLink to="/" className="navmenu">
                
                  <img src={home} className="" />
                
                Trang Chủ
              </NavLink>
            </li>
            <li className="limenu">
              
              <NavLink to="/Ticket">
              <span>
                {" "}
                <img src={img1} className="" />
              </span>
              Quản lý vé</NavLink>
            </li>
            <li className="limenu">
              
              <NavLink to="/Ticketcontrol">
              <span>
                {" "}
                <img src={img2} className="" />
              </span>
              Đối soát vé</NavLink>
            </li>
            <li className="limenu">
              
             
              <span>
                {" "}
                <img src={img3} className="" />
              </span>
              Danh sách sự kiện
            </li>
            <li className="limenu">
              
              
              <span>
                {" "}
                <img src={img4} className="" />
              </span>
              Quản lý thiết bị
            </li>

            <li className="limenu">
              
              <NavLink to="/Service">
              <span>
                {" "}
                <img src={img5} className="" />
              </span>
              Cài đặt</NavLink>
            </li>
            <ul>
              <li className="limenu">
                Gói dịch vụ
              </li>
            </ul>
          </ul>
        </div>
      </menu>
      <div style={{textAlign:'center'}}>
        <p className="Software">Copyright 2020 <img src={alta} /> Alta Software </p>
      </div>
    </Col>
  );
}

export default Menu;
