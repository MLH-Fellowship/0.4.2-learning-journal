import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";

import TabBarIcon from '../components/TabBarIcon';
import Journal from '../screens/Journal';
import Explore from '../screens/Explore';
import Logger from "../screens/JournalLogger";

const BottomTab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Home";

function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Journal"
        component={Journal}
        options={{
          title: 'Journal',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="loggerModal"
        component={Logger}
      />
    </RootStack.Navigator>
  );
}

