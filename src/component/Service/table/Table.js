import { Table, Tag } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Booking code",
    dataIndex: "Bookingcode",
  },
  {
    title: "Số vé",
    dataIndex: "numberticket",
  },
  {
    title: "Tên sự kiện",
    dataIndex: "nameEvent",
  },
  {
    title: "Tình trạng sử dụng",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length < 12 ? "#919DBA" : "#03AC00";

          if (tag === "Hết hạn") {
            color = "#FD5959";
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
    title: "Ngày Xuất vé",
    dataIndex: "dateuotput",
  },
  {
    title: "Cổng check - in",
    dataIndex: "doorcheck",
  },
  {
    title: "",
    dataIndex: "statuss",
  },
];
const data = [];

for (let i = 0; i < 40; i++) {
  data.push({
    key: i,
    STT: 1,
    Bookingcode: `ALT20210501`,
    numberticket: 123456789034,
    nameEvent: "Hội chợ triển lãm tiêu dùng 2021",
    date: "14/04/2021",
    dateuotput: "14/04/2021",
    tags: ["Chưa sử dụng"],
    doorcheck: `Cổng 1`,
  },
  {
    key: i,
    STT: 2,
    Bookingcode: `ALT20210501`,
    numberticket: 123456789034,
    nameEvent: "Hội chợ triển lãm tiêu dùng 2021",
    date: "14/04/2021",
    dateuotput: "14/04/2021",
    tags: ["Hết hạn"],
    doorcheck: `Cổng 1`,
  },
  {
    key: i,
    STT: 2,
    Bookingcode: `ALT20210501`,
    numberticket: 123456789034,
    nameEvent: "Hội chợ triển lãm tiêu dùng 2021",
    date: "14/04/2021",
    dateuotput: "14/04/2021",
    tags: ["Đã sử dụng"],
    doorcheck: `Cổng 1`,
  });
}

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default App;
