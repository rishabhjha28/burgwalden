import React from 'react';
import { AreaChart, CartesianGrid,Area, XAxis,YAxis,Tooltip,} from 'recharts';

export default function Areagraph(props) {
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
    <div className='areacontainer'>
      <div className='info-firsthalf'>
        <div className='info-firsthalf-left'>
          <p className='bold'>Sales This Months</p>
          <p className="pldata">Users from all channels</p>
        </div>
        <div className="threedot">. . .</div>
      </div>
      <div className='info-secondhalf'>
        <p className='gainloss' ><span className='dollor'>$</span>14,094</p>
        <p className="pldata">Another $48,346 to Goal</p>
      </div>
      <div>
        <AreaChart width={props.isMobile?350:550} height={250} data={data}
          margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#81dbd3" stopOpacity={0.8}/>
              <stop offset="70%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} axisLine={false}/>
          <YAxis axisLine = {false} tickLine = {false}/>
          <CartesianGrid vertical = {false} strokeDasharray="3"/>
          <Tooltip />
          <Area type = 'natural' dataKey="age" unit = ' year' stroke="#81dbd3" strokeWidth={4} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>
    </div>
  )
}
