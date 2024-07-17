import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import LoginScreen from '../components/LoginScreen'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const RootLayout = () => {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf')
  })
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='(tabs)'/>
    </Stack>        
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>

    </ClerkProvider>
  )
}

export default RootLayout
