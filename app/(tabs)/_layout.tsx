import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#64748b",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "#334155",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: "#1e293b",
        },
        headerTintColor: "#f8fafc",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Leaderboard",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Badges",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
