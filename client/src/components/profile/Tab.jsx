import React from "react";
import { Tabs } from "@radix-ui/themes";

function Tab() {
  return (
    <>
      <Tabs.Root defaultValue="stats" >
        <Tabs.List wrap="wrap" className="flex items-center justify-between">
          <Tabs.Trigger value="activity" disabled>Recent Activity</Tabs.Trigger>
          <Tabs.Trigger value="stats">Stats</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
}

export default Tab;
