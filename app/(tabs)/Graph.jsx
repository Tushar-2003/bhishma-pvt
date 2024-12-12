import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import { useLocation } from "@/utils/LocationContext";
import ChartComponent from '@/components/GraphPage/ChartComponent';



export default function GraphScreen() {
  const { currentLocation, setCurrentLocation } = useLocation();
  

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <ChartComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
