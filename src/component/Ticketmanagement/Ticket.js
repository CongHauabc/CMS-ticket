import React from "react";
import "~/component/cp.css";
import img6 from "~/asset/img/search.png";
import "./ticket.css";
import fillterimg from "~/asset/img/fi_filter.png";

import Table from '~/component/Ticketmanagement/table/Table'
function Ticket(props) {
  const handleFillte = ()=>{
    const btnfil = document.querySelector('.FillterBox1')
    const fill = document.querySelector('.filler')
    btnfil.addEventListener('click',()=>{
      fill.classList.add('open')
    })
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
         
            
            <button onClick={handleFillte} className="FillterBox1"><span><img src={fillterimg}/></span>Lọc vé</button>
           
          
          <button className="FillterBox2" style={{background:'white'}}>
            
            Xuất file (.csv)
          </button>
        </div>
      </div>
      <div>
        <Table/>
      </div>
      
    </div>
  );
}

export default Ticket;
