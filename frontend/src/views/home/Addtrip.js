import React from "react";
import { AddTripForm } from "../../components/body/AddTripForm";
import { SideBar } from "../../components/navigation/SideBar";
import { AppHeader } from "../../components/navigation/Header";
import { Flex } from "@mantine/core";
export const Addtrip = React.memo(() => {
  return (
    <div>
      <AppHeader active={"Add Task"} />
      <Flex>
        <SideBar active={"Add Task"} />
        <AddTripForm />
      </Flex>
    </div>
  );
});
