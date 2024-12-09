import { styles } from './styles'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { router } from 'expo-router'

type AuthModalPropsType = {
  isOpen: boolean
  closeModal: () => void
}

export default function AuthModal({ isOpen, closeModal }: AuthModalPropsType) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
    if (index == -1) {
      closeModal()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      handlePresentModalPress()
    }
  }, [isOpen])

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <BottomSheetModal ref={bottomSheetModalRef} onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.heading}>
              Welcome to <Text style={styles.highlight}>Commitmates</Text>
            </Text>
            <Text style={styles.description}>Sign up to track your commitments and grow stronger with friends.</Text>

            <Pressable style={styles.signupButton} onPress={() => router.push('/auth/signup')}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </Pressable>

            <Pressable style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
