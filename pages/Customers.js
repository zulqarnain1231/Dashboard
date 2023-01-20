import React from "react";
import { data } from "@/data/data";
import Customer from "@/Components/Customer";
const Customers = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <div className="flex justify-between p-4">
        <h1>Customers</h1>
        <h1>Welcome Back! Client</h1>
      </div>
      <div className="m-2 bg-white rounded-lg border shadow-lg p-4">
        <div className="grid md:grid-cols-4 grid-cols-2 justify-between p-2 my-2">
          <h1>Name</h1>
          <h1 className="text-right md:text-left">Email</h1>
          <h1 className="hidden md:grid">Last Order</h1>
          <h1 className="hidden md:grid">Method</h1>
          
        </div>
        <div>

      
{
  data.map((item)=>{
      return (
          <div key={item.id}>
          <Customer name={item.name.first} email={item.name.last} lastorder={item.date} method={item.method}/>
          </div>
      )
  })
}</div>
      </div>
     
    </div>
  );
};

export default Customers;
