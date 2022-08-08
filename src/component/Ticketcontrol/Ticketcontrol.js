import React from "react";
import { Row, Col } from "antd";
import "./Ticketcontrol.css";
import { DatePicker, Space } from "antd";
import Table from '~/component/Ticketcontrol/table/Table'

function Ticketcontrol(props) {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={16}>
              <div className="conten1">
                <div>
                <div>
                  <h1>
                    <b>Đối soát vé</b>
                  </h1>
                </div>
                <div className="ticketbox1">
                  <div className="searchbox">
                    <input
                      type="search"
                      placeholder="Search"
                      className="search1"
                    />
                  </div>
                  <div className="FillterBox">
                    <div className="FillterBox2">
                      <p>Chốt đối soát</p>
                    </div>
                  </div>
                </div>
                </div>
                <div>
                  <Table/>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="content2">
                <div>
                  <h1>
                    <b>Lọc vé</b>
                  </h1>
                </div>
                <div className="statusticket">
                  <div className="title">
                    <p>Tình trạng đổi soát</p>
                  </div>
                  <div className="status">
                    <label>
                      <input type={"radio"} /> Tất cả
                    </label>
                    <br />
                    <label>
                      <input type={"radio"} /> Đã đối soát
                    </label>
                    <br />
                    <label>
                      <input type={"radio"} /> Chưa đối soát
                    </label>
                  </div>
                </div>
                <div className="statusticket">
                  <div className="title1">
                    <p>Loại vé</p>
                    <p>Từ ngày</p>
                    <p>Đến ngày</p>
                  </div>
                  <div className="time">
                    <p>Vé cổng</p>
                    <Space direction="vertical" size={12} style={{marginBottom:'9px'}}>
                      <DatePicker
                        dateRender={(current) => {
                          const style = {};

                          if (current.date() === 1) {
                            style.border = "1px solid #1890ff";
                            style.borderRadius = "50%";
                          }

                          return (
                            <div
                              className="ant-picker-cell-inner"
                              style={style}
                            >
                              {current.date()}
                            </div>
                          );
                        }}
                      />
                    </Space>
                    <Space direction="vertical" size={12}>
                      <DatePicker
                        dateRender={(current) => {
                          const style = {};

                          if (current.date() === 1) {
                            style.border = "1px solid #1890ff";
                            style.borderRadius = "50%";
                          }

                          return (
                            <div
                              className="ant-picker-cell-inner"
                              style={style}
                            >
                              {current.date()}
                            </div>
                          );
                        }}
                      />
                    </Space>
                  </div>
                </div>
                <div>
                <button className="filter">Lọc</button>

                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Ticketcontrol;
