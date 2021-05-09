import React from "react";
import NavigationBar from "../../core/components/NavigationBar";
import Footer from "./Footer";
import { ContentUI, LayoutInnerUI, LayoutUI } from "./ui/LayoutUI";

const Layout = (props) => {
  return (
    <LayoutUI>
      <LayoutInnerUI>
        <ContentUI>
          <NavigationBar />

          {props.children}
        </ContentUI>

        <Footer />
      </LayoutInnerUI>
    </LayoutUI>
  );
};

export default Layout;
