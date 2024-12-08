import { Redirect } from 'expo-router'
import { useState } from 'react'

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />
  } else {
    return <Redirect href="/onboarding" />
  }
}
