import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "backgroundPrimary",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Inicio", animation: "fade_from_bottom" }}
      />
    </Stack>
  );
};

export default StackLayout;

