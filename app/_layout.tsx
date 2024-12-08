import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    InterRegular: require('../assets/fonts/InterRegular.ttf'),
    InterBold: require('../assets/fonts/InterBold.ttf'),
    InterExtraBold: require('../assets/fonts/InterExtraBold.ttf'),
    InterExtraLight: require('../assets/fonts/InterExtraLight.ttf'),
    InterLight: require('../assets/fonts/InterLight.ttf'),
    InterMedium: require('../assets/fonts/InterMedium.ttf'),
    InterSemiBold: require('../assets/fonts/InterSemiBold.ttf'),
    InterThin: require('../assets/fonts/InterRegular.ttf'),
    DenverSerialHeavy: require('../assets/fonts/DenverSerialHeavy.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </ThemeProvider>
  )
}
