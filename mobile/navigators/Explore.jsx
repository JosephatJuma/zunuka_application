import { ProgressBar, Banner } from "react-native-paper";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Apartments from "../app/hotels/Apartments";
import Homes from "../app/hotels/Homes";
import Hotels from "../app/hotels/Hotels";
import Header from "../app/home/Header";
const TopTab = createMaterialTopTabNavigator();

const Explore = () => {
  const ApartmentsScreen = () => {
    return <Apartments />;
  };
  const HotelsScreen = () => {
    return <Hotels />;
  };
  const HomesScreen = () => {
    return <Homes />;
  };
  return (
    <>
      <Header />
      <ProgressBar indeterminate={true} />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            textTransform: "capitalize",
            fontWeight: "bold",
          },
        }}
      >
        <TopTab.Screen name="Hotels" component={HotelsScreen} />
        <TopTab.Screen name="Homes" component={HomesScreen} />
        <TopTab.Screen name="Apartments" component={ApartmentsScreen} />
      </TopTab.Navigator>
      <Banner
        visible={true}
        actions={[
          { label: "Try Again", onPress: () => {} },
          { label: "Okay", onPress: () => {} },
        ]}
        icon={"information-outline"}
      >
        This is comming soon!
      </Banner>
    </>
  );
};

export default Explore;
