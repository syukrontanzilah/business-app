import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//search icon for expo:  https://icons.expo.fyi/Index

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen 
        name='home'
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
        }}
        />
        <Tabs.Screen 
        name='explore'
        options={{
          tabBarLabel:'Explore',
          tabBarIcon: ({color}) => <MaterialIcons name="explore" size={24} color={color} />
        }}
        />
        <Tabs.Screen 
        name='profile'
        options={{
          tabBarLabel:'Explore',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
        }}
        />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})