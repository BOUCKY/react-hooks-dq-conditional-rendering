import React from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const detailsToDisplay = <div>Hi, I'm a div!</div>;

  return (
    <div>
      <MenuBar />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
