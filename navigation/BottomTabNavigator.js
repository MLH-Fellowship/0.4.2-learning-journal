import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from '../components/TabBarIcon';
import HomeFeed from '../screens/HomeFeed';
import JournalFeed from '../screens/JournalFeed';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeFeed}
        options={{
<<<<<<< HEAD
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
=======
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
>>>>>>> 8220865762bb0e9509b095d4d31a7172d650901e
        }}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalFeed}
        options={{
<<<<<<< HEAD
          title: 'Journal',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
=======
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
>>>>>>> 8220865762bb0e9509b095d4d31a7172d650901e
        }}
      />
    </BottomTab.Navigator>
  );
}

<<<<<<< HEAD
=======
function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
>>>>>>> 8220865762bb0e9509b095d4d31a7172d650901e
