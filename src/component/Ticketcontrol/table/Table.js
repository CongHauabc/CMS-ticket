import { Button, Table } from "antd";
import React, { useState } from "react";
const columns = [
  
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Số vé",
    dataIndex: "numberTicket",
  },
  {
    title: "Ngày sử dụng",
    dataIndex: "date",
  },
  {
    title: "Tên loại vé",
    dataIndex: "nameTicket",
  },
  {
    title: "Cổng check - in",
    dataIndex: "checkin",
  },
  {
    title: "",
    dataIndex: "status",
  },
];
const data = [{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},
{
  key: 1,
  numberTicket: 205314876321,
  date: '14/04/2021',
  nameTicket: `Vé cổng`,
  checkin:'Cổng 1',
  status:'Chưa đối soát'
},];

for (let i = 0; i < data.length; i++) {
  data.push();
}

const App = () => {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ");
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
