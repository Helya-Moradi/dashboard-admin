import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newUsers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((newUser) => (
          <li className="widgetSmItem">
            <img src={newUser.img} alt="newUser" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserTitle">{newUser.title}</span>
              <span className="widgetSmUserJob">{newUser.job}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
