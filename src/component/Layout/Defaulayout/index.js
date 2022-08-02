import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import { Col, Row } from "antd";
import "./Menu.css";
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
    </div>
  );
}

export default Defaulayout;
