import React from "react";
import "~/component/cp.css";
import img6 from "~/asset/img/search.png";
import "./ticket.css";
import fillterimg from "~/asset/img/fi_filter.png";

import Table from '~/component/Ticketmanagement/table/Table'
function Ticket(props) {
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
          <div className="FillterBox1">
            <img src={fillterimg}/>
            <p>Lọc vé</p>
          </div>
          <div className="FillterBox2">
            
            <p>Xuất file (.csv)</p>
          </div>
        </div>
      </div>
      <div>
        <Table/>
      </div>
    </div>
  );
}

export default Ticket;
