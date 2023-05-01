import React from "react";
import "./Home.css";
import Feature from "../../components/feauture/Feature";
import Chart from "../../components/chart/Chart";
import { XAxis } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

let featuresData = [
  { id: 1, title: "Revanue", money: "2,415", rate: "-11.4", negative: true },
  { id: 2, title: "Sales", money: "4,143", rate: "-1.4", negative: true },
  { id: 3, title: "Cost", money: "2,225", rate: "2.4", negative: false },
];

export default function Home() {
  return (
    <div className="home">
      <div className="features">
        {featuresData.map((featureData) => {
          return <Feature key={featureData.id} {...featureData} />;
        })}
      </div>
      <Chart title="User Analytics" data={XAxis} dataKey="sale" />
      <div className="widgetsContainer">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
