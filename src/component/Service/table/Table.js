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
    title: "Số vé",
    dataIndex: "numberSticket",
  },
  {
    title: 'Tình trạng sử dụng',
    dataIndex: 'tags',
    key: 'tags',
    render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 8 && tag.length < 12 ? 'geekblue' : 'green';
  
            if (tag === 'Hết hạn') {
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
    title: "Ngày sử dụng",
    dataIndex: "date",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "dateout",
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
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',

  
  
  checkin:'Cổng 1',
  
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
