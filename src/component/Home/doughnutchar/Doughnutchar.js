import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './style.css'
function Doughnutchar(props) {
     const data = {
        
        datasets: [{
          label: 'My First Dataset',
          data: [ 13568,56024 ],
          backgroundColor: [
            
            '#FF8A48',
            '#4F75FF',
          
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