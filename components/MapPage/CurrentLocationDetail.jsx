import React from 'react'
import { Text, View, Flatlist, ScrollView , StyleSheet } from 'react-native';
import { useLocation } from "@/utils/LocationContext";

const data = require('@/utils/Dataset.json'); 


const CurrentLocationDetail = () => {
  const date = '2017-03-01'
  const { currentLocation } = useLocation();
  let currentcity = `${currentLocation}`;
  const cityData = data[currentcity];
  const dataPoint = cityData ? cityData[date] : null;

  
  
  return (
    <View>
      <Text style={styles.locationTitle}>{currentLocation}</Text>
      
      <Text>Temperature: {dataPoint.Temperature}°C</Text>
      <Text>Dissolved Oxygen: {dataPoint['Dissolved Oxygen']} mg/L</Text>
      <Text>pH: {dataPoint.pH}</Text>
      <Text>Conductivity: {dataPoint.Conductivity} µS/cm</Text>
      <Text>Bio Chemical Oxygen Demand: {dataPoint['Bio Chemical Oxygen Demand']} mg/L</Text>
      <Text>Nitrate: {dataPoint.Nitrate} mg/L</Text>
      <Text>Fecal Coliform: {dataPoint['Fecal Coliform']}</Text>
      <Text>Total Coliform: {dataPoint['Total Coliform']}</Text>
    </View>
  )
}

export default CurrentLocationDetail


const styles = StyleSheet.create({
  locationTitle:{
    marginTop: 20,
    marginLeft:20,
    fontSize:18,
    fontWeight:"bold",
    color:"#444",
  },
})