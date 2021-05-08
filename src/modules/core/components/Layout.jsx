import React from "react";
import NavigationBar from "../../core/components/NavigationBar";

const Layout = (props) => {
  return (
    <>
      <NavigationBar />

      {props.children}
    </>
  );
};

export default Layout;
