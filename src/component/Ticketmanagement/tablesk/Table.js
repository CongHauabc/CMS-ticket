import { Space, Table ,Tag,Popover} from "antd";
import React, { useState } from "react";
import dotdotdot from "~/asset/img/dotdotdot.png";
const setTimes = () =>{
  const setTimess = document.querySelector(".setTime");
  const btnsetimes = document.querySelectorAll(".btnsetime")
  btnsetimes.forEach(i=>{
    i.addEventListener('click',()=>{
      setTimess.classList.add('open')
    })
  })
}
const content = (
  <div style={{cursor:'pointer'}}>
    <p>Sử dụng vé</p>
    <p onClick={setTimes} className="btnsetime" >Đổi ngày sử dụng</p>
  </div>
);
const columns = [
  
  {
    title: "Số",
    dataIndex: "key",
  },
  {
    title: "Booking code",
    dataIndex: "Bookingcode",
  },
  {
    title: "Số vé",
    dataIndex: "numberSticket",
  },
  {
    title: "Tên sự kiện",
    dataIndex: "namesk",
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
    render: () => (
      <Space size="middle">
        <Popover content={content}  trigger="click">
          <img style={{cursor:'pointer'}} src={dotdotdot}/>
        </Popover>
      </Space>
    ),
  },
];
const data = [{
  key: 1,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Chưa sử dụng'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'

},
{
  key: 2,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 3,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Đã sử dụng'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 4,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Chưa sử dụng'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 5,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 7,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 8,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Chưa sử dụng'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 9,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 10,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['ĐÃ SỬ DỤNG'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 11,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 12,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 13,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
},
{
  key: 14,
  Bookingcode:'ALTFGHJU',
  numberSticket: 123456789034,
  tags:['Hết hạn'],
  date: '14/04/2021',
  dateout: '14/04/2021',
  checkin:'Cổng 1',
  namesk:'Hội chợ triển lãm tiêu dùng 2021'
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
