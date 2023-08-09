import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile Page" />
      <NavBarTab path="/public" label="Company Portal" />
      <NavBarTab path="/temp" label="Survey Collection" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Fill Survey" />
          <NavBarTab path="/admin" label="Surveys Participated" />
          {/* <NavBarTab path="/admin" label="Fill Survey" /> */}
        </>
      )}
    </div>
  );
};
