import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transactions.map((transaction) => (
          <tr className="widgetLgTr">
            <td className="widgetLgCustomer">
              <img src={transaction.img} className="customerImg" />
              <span className="customerName">{transaction.customer}</span>
            </td>
            <td className="widgetLgDate">{transaction.date}</td>
            <td className="widgetLgAmout">${transaction.amout}</td>
            <td className="widgetLgStatus">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
