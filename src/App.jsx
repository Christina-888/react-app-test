//import { useState } from 'react'
import { Chart } from "react-google-charts";
import './App.css'

function App() {

  const data = [
    ["Task", "Hours per Day"],
    ["Coding", 5],
    ["Work", 8],
    ["Study", 1],
    ["Eat", 2],
    ["Read", 1],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );  
}

export default App
