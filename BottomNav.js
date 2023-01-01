import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileStackNavigator } from "./Navigation";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name="Search"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name="Activity"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
