import React from 'react'
import { BarChart,Bar} from 'recharts'

export default function BarGraph(props){
  const data = [
    {name:"Rishabh",age:21},
    {name:"Shashwat",age:23},
    {name:"Rachit",age:22},
    {name:"Gaurav",age:20},
    {name:"Shubham",age:20},
    {name:"Amogh",age:23},
    {name:"Rohan",age:15},
    {name:"Varshit",age:30}
  ]
  return (
    <div className='barContainer'>
      <div className='barInfo'>
        <p className='gainloss'><span className='dollor'>$</span>2,2420 <span className='percentagepl'>^2.6%</span></p>
        <p className = 'pldata'>Average Daily Sales</p>
      </div>
      <div className='bar'>
        <BarChart barGap = {5} width= {props.isMobile?300:500} height={300} data={data} maxBarSize = {20}>
          <Bar dataKey="age" fill="#CF33FF" radius={[10,10,0,0]}/>
        </BarChart>
      </div>
    </div>
  )
}
