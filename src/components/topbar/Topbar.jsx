import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLogo">Sabzlearn ❤</div>
        <div className="topbarNav">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="/images/profile.jfif"
            alt="Admin Profile"
            className="topbarImage"
          />
        </div>
      </div>
    </div>
  );
}
