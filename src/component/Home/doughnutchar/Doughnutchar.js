import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './style.css'
function Doughnutchar(props) {
     const data = {
        
        datasets: [{
          label: 'My First Dataset',
          data: [ 50,150],
          backgroundColor: [
            '#4F75FF',
            '#FF8A48',
          
          ],
          hoverOffset: 4
        }]
      };
    return (
        <div className='char1'>
            <Doughnut data={data}/>
        </div>
    );
}

export default Doughnutchar;