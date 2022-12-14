import React from "react";
import "~/component/cp.css";
import img6 from "~/asset/img/search.png";
import "./Service.css";
import fillterimg from "~/asset/img/fi_filter.png";
import { useState } from "react";
import Table from "~/component/Service/table/Table";
function Service(props) {
  const clickbtn = ()=>{
    const btnfil = document.querySelector(".FillterBox11");
    const fill = document.querySelector(".addTicket");
    btnfil.addEventListener("click", () => {
      fill.classList.add("open");
    });
  }
  return (
    <div className="Conten">
      <div>
        <h1>
          <b>Danh sách vé</b>
        </h1>
      </div>
      <div className="ticketbox1">
        <div className="searchbox">
          <input type="search" placeholder="Search" className="search1" />
          <img src={img6} className="searchimg1" />
        </div>
        <div className="FillterBox">
          <div className="FillterBox2">
            <p>Xuất file (.csv)</p>
          </div>
          <button onClick={clickbtn} className="FillterBox11">
            Thêm gói mới
          </button>
        </div>
      </div>
      <div>
        <Table />
      </div>

      
        
    </div>
  );
}

export default Service;
