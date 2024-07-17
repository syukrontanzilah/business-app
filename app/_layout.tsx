import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const App = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='(tabs)'/>
    </Stack>
  )
}

export default App

const styles = StyleSheet.create({})