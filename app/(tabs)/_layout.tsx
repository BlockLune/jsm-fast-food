import { Redirect, Slot } from "expo-router";

export default function TabsLayout() {
  const isAuthenticated = true; // Replace with actual authentication logic

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
