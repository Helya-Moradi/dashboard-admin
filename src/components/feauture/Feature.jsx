import React from "react";
import "./Feuture.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

export default function Feature(props) {
  let { title, money, rate, negative } = props;
  return (
    <div className="feature">
      <div className="featureTitle">{title}</div>
      <div className="featureContainer">
        <span className="featureMoney">${money}</span>
        <div className="featureRate">
          <span className="rate">{rate}</span>
          {negative ? (
            <ArrowDownward className="rateIcon negative" />
          ) : (
            <ArrowUpward className="rateIcon" />
          )}
        </div>
      </div>
      <div className="featureSub">Compared to last month</div>
    </div>
  );
}
