import React from "react";
import "../../../index.css";
import SubmenuItem from "./Submenu-item";

function NavigationBar() {
  return (
    <div>
      <SubmenuItem link_to={"/walk-now"} text={"Walk now"} />
      <SubmenuItem link_to={"/plan-walk"} text={"Plan a walk"} />
      <SubmenuItem link_to={"/walk-history"} text={"Walk history"} />
    </div>
  );
}

export default NavigationBar;
