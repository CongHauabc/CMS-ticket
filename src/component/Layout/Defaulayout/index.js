import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import { Col, Row, Radio } from "antd";
import { useState } from "react";
import "./Menu.css";

import moment from "moment";
import { DatePicker, Space, TimePicker, Select } from "antd";
const { Option } = Select;
function Defaulayout({ children }) {
  const clickFillte = () => {
    const btns = document.querySelector(".btnfill");
    const fill = document.querySelector(".filler");
    btns.addEventListener("click", () => {
      fill.classList.remove("open");
    });
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const door = [
    { id: 1, door: "Tất cả" },
    { id: 2, door: "Cổng 1" },
    { id: 3, door: "Cổng 2" },
    { id: 4, door: "Cổng 3" },
    { id: 5, door: "Cổng 4" },
    { id: 6, door: "Cổng 5" },
  ];
  const [checked, setChecked] = useState([]);
  console.log(checked);

  const handleCheck = (id) => {
    setChecked((pre) => {
      const isChecked = checked.includes(id);
      if (id === 1) {
        setChecked([1]);
      }
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };

  return (
    <div>
      <Row>
        <Col span={19} push={5}>
          <Header />

          <Col span={24} push={0} className="contenchil">
            {children}
          </Col>
        </Col>

        <Menu />
      </Row>

      <div className="filler">
        <div className="fillter-content">
          <h1>Lọc vé</h1>

          <div className="timeFillter">
            <div>
              <p>Từ ngày</p>
              <Space
                direction="vertical"
                size={12}
                style={{ marginTop: "-10px" }}
              >
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
              <Space
                direction="vertical"
                size={12}
                style={{ marginTop: "-10px" }}
              >
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
            <h4 className="statusUs">Tình trạng sử dụng</h4>
            <div className="status">
              <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Tất cả</Radio>
                <Radio value={2}>Đã sử dụng</Radio>
                <Radio value={3}>Chưa sử dụng</Radio>
                <Radio value={4}>Hết hạn</Radio>
              </Radio.Group>
            </div>
          </div>
          <div>
            <h4 className="statusUs" style={{ margin: "24px 0 8px 0" }}>
              Cổng Check - in
            </h4>
            <div className="status">
              {door.map((doors) => (
                <label key={doors.id}>
                  <input
                    type={"checkbox"}
                    checked={checked.includes(doors.id)}
                    onChange={() => handleCheck(doors.id)}
                  />
                  <span>{doors.door}</span>
                </label>
              ))}

              <br />
            </div>
          </div>
          <div className="btnfi">
            <button onClick={clickFillte} className="btnfill">
              Lọc
            </button>
          </div>
        </div>
      </div>
      <div className="addTicket">
        <div className="addTicketContent">
          <h1>Thêm gói vé</h1>
          <label className="hcontent">
            Tên gói vé<span>*</span>
          </label>
          <br />
          <input className="addnameTicket" />
          <div className="addTime">
            <div className="addtime-content">
              <label className="hcontent">Ngày áp dụng</label>
              <br />
              <div className="addtime-contents">
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
                <TimePicker
                  placeholder="HH:mm:ss"
                  size="large"
                  style={{ width: "137px", height: "40px" }}
                />
              </div>
            </div>
            <div className="addtime-content">
              <label className="hcontent">Ngày hết hạn</label>
              <br />
              <div className="addtime-contents">
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
                <TimePicker
                  placeholder="HH:mm:ss"
                  size="large"
                  style={{ width: "137px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="hcontent">
              Giá vé áp dụng<span>*</span>
            </label>
            <label className="primeticket" style={{marginBottom:'28px',marginTop:'22px'}}>
              <input type={"checkbox"} /> <span>Vé lẻ (vnđ/vé) với giá</span>
              <input className="primetickets" placeholder="Giá vé" />
              <span>/ vé</span>
            </label>
            <label className="primeticket">
              <input type={"checkbox"} /> <span>Vé lẻ (vnđ/vé) với giá</span>
              <input className="primetickets" placeholder="Giá vé" />
              <span>/</span>
              <input className="primetickets" placeholder="Giá vé" />
              <span>vé</span>
            </label>
          </div>
          <div>
            <label className="hcontent">Tình trạng</label>
            <br />

            <Select
              className="selecto"
              defaultValue="Đang áp dụng"
              style={{
                width: 176,
                height: 40,
                borderRadius:8,
              }
              }
              onChange={handleChange}
            >
              <Option value="lucy">Đang áp dụng</Option>
            </Select>
          </div>
          <p>
            <span>*</span> là thông tin bắt buộc
          </p>
          <div className="btnclick">
            <button className="cancel">Hủy</button>
            <button className="save">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Defaulayout;
