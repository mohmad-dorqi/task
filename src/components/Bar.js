import React from 'react';
import '../App.css';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
let info=[]
const BarChart = () => {
    const [cdata,setCdata]=useState('')

    const clickHandler=()=>{
      if(info.length<=11){
        info.push(cdata)
      }else{
        info=[]
        info.push(cdata)

      }
     
      setChartData({
        labels:[1,2,3,4,5,6,7,8,9,10,11,12],
        datasets:[{
          label:'Month Sale',
          data:info.map((i)=>i),
         
        }]
     })


  }
   
  
   
     const [chartData,setChartData]=useState({
          labels:[1,2,3,4,5,6,7,8,9,10,11,12],
          datasets:[{
            label:'Month Sale',
            data:[5,20,40,70,25,30,10,50,60,80,15,12],
            barThickness: 10,
            backgroundColor: ['red','blue']
            
          }]
       })
      
    return (
        <div className="App">
             <input onChange={(e)=>setCdata(e.target.value)} type='text'/>
             <button onClick={clickHandler}>enter</button>
             <Bar data={chartData}/>
        </div>
    );
};

export default BarChart;