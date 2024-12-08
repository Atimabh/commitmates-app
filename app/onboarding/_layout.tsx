import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="one" options={{ headerShown: false }} />
      <Stack.Screen name="two" options={{ headerShown: false }} />
    </Stack>
  )
}
