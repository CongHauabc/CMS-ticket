import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import { Col, Row } from "antd";
import "./Menu.css";
import { DatePicker, Space } from "antd";
function Defaulayout({ children }) {
  return (
    <div>
    <Row>
       
       <Col span={19} push={5}>
         <Header />
       
       <Col span={24} push={0} className='contenchil'>
         {children}
       </Col>
     </Col>

     <Menu />
   </Row>
   
       <div className="filler" >
          <div className="fillter-content">
              <h1>Lọc vé</h1>

              <div className="timeFillter">
                <div>
                  <p>Từ ngày</p>
                  <Space direction="vertical" size={12}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};

                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }

                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>
                </div>
                <div>
                  <p>Đến ngày</p>
                  <Space direction="vertical" size={12}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};

                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }

                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>
                </div>
              </div>
              <div>
              <h4>Tình trạng sử dụng</h4>
              <div className="status">
                    <label>
                      <input type={"radio"} /> Tất cả
                    </label>
                    <br />
                    <label>
                      <input type={"radio"} /> Đã sử dụng
                    </label>
                    <br />
                    <label>
                      <input type={"radio"} /> Chưa sử dụng
                    </label>
                    <label>
                      <input type={"radio"} /> Hết hạn
                    </label>
                  </div>
              </div>
              <div>
              <h4>Cổng Check - in</h4>
              <div className="status">
                    <label>
                      <input type={"checkbox"} />   Tất cả 
                    </label>
                    <br />
                    <label>
                      <input type={"checkbox"} /> Cổng 1
                    </label>
                    <br />
                    <label>
                      <input type={"checkbox"} /> Cổng 2
                    </label>
                    
                    
                  </div>
                  <div className="status">
                  <label>
                      <input type={"checkbox"} /> Cổng 3
                    </label>
                    <br />
                    <label>
                      <input type={"checkbox"} /> Cổng 4
                    </label>
                    <br />
                    <label>
                      <input type={"checkbox"} /> Cổng 5
                    </label>
                    
                    
                  </div>
              </div>
              <div className="btnfi">
                <button className="btnfill">Lọc</button>
              </div>
          </div>
        </div>
    </div>
      
    
  );
}

export default Defaulayout;
