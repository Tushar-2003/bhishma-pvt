import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import { useLocation } from "@/utils/LocationContext";



export default function GraphScreen() {
  const { currentLocation, setCurrentLocation } = useLocation();
  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <View >
        <Text >Graph goes here</Text>
        <Text>{currentLocation}</Text>
      </View>
    </>
  );
}
