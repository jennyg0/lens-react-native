import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileStackNavigator } from "./Navigation";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProfileStackNavigator} />
      <Tab.Screen name="Search" component={ProfileStackNavigator} />
      <Tab.Screen name="Activity" component={ProfileStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
