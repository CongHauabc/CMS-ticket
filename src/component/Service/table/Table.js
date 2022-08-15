import { Button, Table ,Tag} from "antd";
import React, { useState } from "react";
const columns = [
  
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã gói",
    dataIndex: "Bookingcode",
  },
  {
    title: "Tên gói vé",
    dataIndex: "nameSticket",
  },
  {
    title: "Ngày áp dụng",
    dataIndex: "date",
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "dateout",
  },
  {
    title: "Giá vé (VNĐ/Vé)",
    dataIndex: "prime",
  },
  {
    title: "Giá combo (VNĐ/Vé)",
    dataIndex: "primeCombo",
  },
  {
    title: 'Tình trạng',
    dataIndex: 'tags',
    key: 'tags',
    render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 8 && tag.length < 12 ? 'green' : 'green';
  
            if (tag === 'Tắt') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
  },  
  
 
  
  {
    title: "",
    dataIndex: "status",
  },
];
const data = [{
  key: 1,
  Bookingcode:'ALT20210501',
  nameSticket: 'Gói gia đình',
  date: '14/04/2021',
  dateout: '14/04/2021',
  prime:'90.000 VNĐ',
  primeCombo:'360.000 VNĐ/4 Vé',
  tags:['Đang áp dụng'],  
},
{
  key: 2,
  Bookingcode:'ALT20210501',
  nameSticket: 'Gói sự kiện',
  date: '14/04/2021',
  dateout: '14/04/2021',
  prime:'20.000 VNĐ',
  primeCombo:'',
  tags:['Tắt'],  
},

];

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
