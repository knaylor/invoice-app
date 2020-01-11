import React from 'react';
import '../styles/invoice-tailwind.css';

const InvoiceList = (props:any) => {

  return (
    <table className="table-fixed w-full border-black rounded">
      <thead>
        <tr className="text-left">
          <th className="bg-gray-400 w-1/2 px-4 py-2 border border-black">Description</th>
          <th className="bg-gray-400 w-1/6 px-4 py-2 border border-black">Cost</th>
          <th className="bg-gray-400 w-1/6 px-4 py-2 border border-black">Quantity</th>
          <th className="bg-gray-400 w-1/6 px-4 py-2 border border-black">Price</th>
        </tr>
      </thead>
      {props.lineItems.map((item: LineItem, idx: number) => {
        return (
          <tbody key={idx}>
            <tr className={idx%2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className="border px-4 py-2 border-black">{item.description}</td>
              <td className="border px-4 py-2 border-black">${item.cost.toFixed(2)}</td>
              <td className="border px-4 py-2 border-black">{item.quantity}</td>
              <td className="border px-4 py-2 border-black">${item.price.toFixed(2)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );

}

export default InvoiceList;