import { View, Text, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import React from 'react'
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <View >
        <Text>Home Screen here</Text>
      </View>
    </>
  );
}
