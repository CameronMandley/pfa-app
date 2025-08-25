import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="budgets" options={{ title: "Budgets" }} />
      <Tabs.Screen name="simulator" options={{ title: "Simulator" }} />
      <Tabs.Screen name="link" options={{ title: "Link Bank (Stub)" }} />
    </Tabs>
  );
}