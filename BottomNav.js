import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FeedStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
  UploadStackNavigator,
} from "./Navigation";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        options={{ headerShown: false }}
        component={FeedStackNavigator}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name="Activity"
        options={{ headerShown: false }}
        component={NotificationStackNavigator}
      />
      <Tab.Screen
        name="Create"
        options={{ headerShown: false }}
        component={UploadStackNavigator}
      />
    </Tab.Navigator>
  );
}
