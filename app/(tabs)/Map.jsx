import { Text, View, Flatlist, StyleSheet } from 'react-native';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import MapComponent from '@/components/MapPage/MapComponent'
import CurrentLocationDetail from '@/components/MapPage/CurrentLocationDetail';

 

export default function MapScreen() {

  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <View >
        <Text >Map goes here</Text>
        <MapComponent />
        <CurrentLocationDetail />

      </View>
    </>
  );
}
