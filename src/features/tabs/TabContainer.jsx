import React, { Component } from "react";
import TabBar from "./TabBar";

export default class TabBarContainer extends Component {
  constructor(props) {
    super(props);

    const { tabs = [{ name: null }] } = props; // set default tab if there are none passed

    const firstTab = tabs[0];

    this.state = {
      currentTab: firstTab.name
    };
  }

  onTabClick = name => {
    this.setState({ currentTab: name });
  };
  
  render() {
      const { tabs, ...otherProps } = this.state;
      const { currentTab } = this.state;

      return (
          <TabBar 
            { ...otherProps }
            currentTab={currentTab}
            onTabClick={onTabClick}
            tabs={tabs}
          />
      )
  }
}
