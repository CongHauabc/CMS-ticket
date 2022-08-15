import React from "react";
import "~/component/cp.css";
import img6 from "~/asset/img/search.png";
import "./ticket.css";
import { useState } from "react";
import fillterimg from "~/asset/img/fi_filter.png";
import Tablesk from "~/component/Ticketmanagement/tablesk/Table";
import Table from "~/component/Ticketmanagement/table/Table";
function Ticket(props) {
  const handleFillte = () => {
    const btnfil = document.querySelector(".FillterBox1");
    const fill = document.querySelector(".filler");
    btnfil.addEventListener("click", () => {
      fill.classList.add("open");
    });
  };

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (i) => {
    setToggleState(i);
  };
  return (
    <div className="Conten">
      <div>
        <h1>
          <b>Danh sách vé</b>
        </h1>
        <div className="tab-menu">
          <div
            className={
              toggleState === 1
                ? "tab-menu-content actiive"
                : "tab-menu-content"
            }
            onClick={() => toggleTab(1)}
          >
            Gói gia đình
          </div>
          <div
            className={
              toggleState === 2
                ? "tab-menu-content actiive"
                : "tab-menu-content"
            }
            onClick={() => toggleTab(2)}
          >
            Gói sự kiện
          </div>
        </div>
      </div>
      <div className="ticketbox1">
        <div className="searchbox">
          <input type="search" placeholder="Search" className="search1" />
          <img src={img6} className="searchimg11" />
        </div>
        <div className="FillterBox">
          <button onClick={handleFillte} className="FillterBox1">
            <span>
              <img src={fillterimg} />
            </span>
            Lọc vé
          </button>

          <button className="FillterBox2" style={{ background: "white" }}>
            Xuất file (.csv)
          </button>
        </div>
      </div>
      <div
        className={toggleState === 1 ? "contents content-active" : "contents"}
      >
        <Table />
      </div>
      <div
        className={toggleState === 2 ? "contents content-active" : "contents"}
      >
        <Tablesk />
      </div>
    </div>
  );
}

export default Ticket;
