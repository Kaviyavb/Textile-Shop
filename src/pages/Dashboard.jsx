import React, { useState } from "react";
import "./Dashboard.css";
import "./RadialChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend
} from "recharts";

const weekOptions = {
  "Week 1": [
    { day: "Mon", value: 500 },
    { day: "Tue", value: 660 },
    { day: "Wed", value: 400 },
    { day: "Thu", value: 350 },
    { day: "Fri", value: 720 },
    { day: "Sat", value: 820 },
    { day: "Sun", value: 600 }
  ],
  "Week 2": [
    { day: "Mon", value: 300 },
    { day: "Tue", value: 450 },
    { day: "Wed", value: 500 },
    { day: "Thu", value: 200 },
    { day: "Fri", value: 640 },
    { day: "Sat", value: 750 },
    { day: "Sun", value: 490 }
  ]
};

const revenueDataByDay = {
  Monday: [
    { name: "Mens", value: 4000, fill: "#0088FE" },
    { name: "Womens", value: 3000, fill:"00C49F" },
    { name: "Kids", value: 2000,fill:"#FFBB28" },
    { name: "Accessories", value: 1000, fill:"#FF8042" }
  ],
  Tuesday: [   
    { name: "Mens", value: 4000, fill: "#0088FE" },
    { name: "Womens", value: 3200,fill:"00C49F" },
    { name: "Kids", value: 2500,fill:"#FFBB28" },
    { name: "Accessories", value: 900 ,fill:"#FF8042"}
  ],
  Wednesday: [
    { name: "Mens", value: 4200 ,fill: "#0088FE" },
    { name: "Womens", value: 2700 ,fill:"00C49F"},
    { name: "Kids", value: 1800,fill:"#FFBB28" },
    { name: "Accessories", value: 1600 ,fill:"#FF8042" }
  ],
  Thursday: [
    { name: "Mens", value: 3800 ,fill: "#0088FE" },
    { name: "Womens", value: 2900 ,fill:"00C49F"},
    { name: "Kids", value: 2100,fill:"#FFBB28" },
    { name: "Accessories", value: 1300 ,fill:"#FF8042"}
  ],
  Friday: [
    { name: "Mens", value: 4800 ,fill: "#0088FE"},
    { name: "Womens", value: 3300 ,fill:"00C49F"},
    { name: "Kids", value: 2600,fill:"#FFBB28" },
    { name: "Accessories", value: 1200 ,fill:"#FF8042"}
  ],
  Saturday: [
    { name: "Mens", value: 5200 , fill: "#0088FE"},
    { name: "Womens", value: 3700 ,fill:"00C49F"},
    { name: "Kids", value: 3100,fill:"#FFBB28" },
    { name: "Accessories", value: 1400 ,fill:"#FF8042"}
  ],
  Sunday: [
    { name: "Mens", value: 4900 ,fill: "#0088FE"},
    { name: "Womens", value: 3600 ,fill:"00C49F"},
    { name: "Kids", value: 2700 ,fill:"#FFBB28"},
    { name: "Accessories", value: 1100 ,fill:"#FF8042"}
  ]
};

const Dashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const salesData = weekOptions[selectedWeek];
  const revenueData = revenueDataByDay[selectedDay];

  return (
    <div className="dashboard">
      <div className="summary-cards">
        <div className="card mens">Mens<div className="amount">₹30,000</div></div>
        <div className="card womens">Womens<div className="amount">₹20,000</div></div>
        <div className="card kids">Kids<div className="amount">₹10,000</div></div>
        <div className="card accessories">Accessories<div className="amount">₹10,000</div></div>
      </div>

      <div className="charts-row">
        <div className="sales-graph half-width">
          <div className="sales-header">
            <h3>Weekly Sales</h3>
            <select
              className="week-dropdown"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
            >
              {Object.keys(weekOptions).map((week) => (
                <option key={week} value={week}>{week}</option>
              ))}
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#005226"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Radial Chart */}
        <div className="sales-graph half-width">
          <div className="sales-header">
            <h3>Revenue Breakdown</h3>
            <select
              className="week-dropdown"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {Object.keys(revenueDataByDay).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
              barSize={15}
              data={revenueData}
            >
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="value"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
     {/* Orders and Low Stocks Tables */}
      <div className="table-pair">
         {/* Orders Table */}
         <div className="table-section">
           <div className="sales-header">
             <h3>Orders</h3>
             <button className="view-all-btn">View All</button>
           </div>
                      <table>
             <thead>
               <tr>
                 <th>Sl. No</th>
                 <th>Name</th>
                 <th>Products</th>
                 <th>Location</th>
                 <th>Mobile Number</th>
                 <th>Quantity</th>
               </tr>
             </thead>
             <tbody>
               <tr><td>1</td><td>Praveen</td><td>Shirt</td><td>Coimbatore</td><td>1234567890</td><td>04</td></tr>
               <tr><td>2</td><td>Gokul</td><td>Shirt</td><td>Erode</td><td>1223456789</td><td>03</td></tr>
               <tr><td>3</td><td>Priya</td><td>Kurti</td><td>Salem</td><td>1233456789</td><td>04</td></tr>
             </tbody>
           </table>
         </div>

         {/* Low Stock Table */}
         <div className="low-stock-table">           <h3>Low Stock</h3>
          <table>
             <thead>
               <tr>
                 <th>Code</th>
                 <th>Product</th>
                 <th>Quantity</th>
               </tr>
             </thead>
             <tbody>
               <tr><td>#1234</td><td>Shirt</td><td>10</td></tr>
               <tr><td>#2345</td><td>Kurti</td><td>6</td></tr>
               <tr><td>#3456</td><td>Frock</td><td>4</td></tr>
             </tbody>
           </table>
         </div>

 </div>
       {/* Expense Table */}
      
       <div className="table-section">
         <div className="sales-header">
         <h3>Expense</h3>
           <button className="view-all-btn">View All</button>
           </div>
         <table>
           <thead>
             <tr>
               <th>Sl. No</th>
               <th>Date</th>
               <th>Category</th>
               <th>Sub-category</th>
               <th>Amount</th>
               <th>Status</th>
               <th>Mobile No</th>
             </tr>
           </thead>
           <tbody>
             <tr><td>1</td><td>2024-06-01</td><td>Purchase</td><td>Mens</td><td>₹12,000</td><td className="paid ">Paid</td><td>9876543210</td></tr>
             <tr><td>2</td><td>2024-06-02</td><td>Transport</td><td>Delivery</td><td>₹2,500</td><td className="unpaid">Unpaid</td><td>9123456780</td></tr>
             <tr><td>3</td><td>2024-06-03</td><td>Advertising</td><td>Online</td><td>₹3,000</td><td className="paid">Paid</td><td>9988776655</td></tr>
           </tbody>
         </table>      </div>
    </div>
  );
};

export default Dashboard;
