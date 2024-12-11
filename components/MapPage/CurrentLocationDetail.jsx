import React from 'react'
import { Text, View, Flatlist, ScrollView , StyleSheet } from 'react-native';
import { useLocation } from "@/utils/LocationContext";

const data = require('@/utils/Dataset.json'); 


const CurrentLocationDetail = () => {
  const date = '2017-03-03'
  const { currentLocation } = useLocation();
  let currentcity = `${currentLocation}`;
  const cityData = data[currentcity];
  const dataPoint = cityData ? cityData[date] : null;

  
  
  return (
    <View style={styles.container}>
      <Text style={styles.locationTitle}>{currentLocation}</Text>
      <Text style={styles.dateTitle}>({date})</Text>

      <Text style={styles.dataText}>Temperature: {dataPoint.Temperature}°C</Text>
      <Text style={styles.dataText}>pH: {dataPoint.pH}</Text>
      <Text style={styles.dataText}>Conductivity: {dataPoint.Conductivity} µS/cm</Text>
      <Text style={styles.dataText}>Dissolved Oxygen: {dataPoint['Dissolved Oxygen']} mg/L</Text>
      <Text style={styles.dataText}>Bio Chemical Oxygen Demand: {dataPoint['Bio Chemical Oxygen Demand']} mg/L</Text>
      <Text style={styles.dataText}>Nitrate: {dataPoint.Nitrate} mg/L</Text>
      <Text style={styles.dataText}>Fecal Coliform: {dataPoint['Fecal Coliform']}</Text>
      <Text style={styles.dataText}>Total Coliform: {dataPoint['Total Coliform']}</Text>
    </View>
  )
}

export default CurrentLocationDetail


const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full height of the screen
    justifyContent: 'flex-start', // Aligns content to the top of the screen
    alignItems: 'center', // Centers items horizontally
    padding: 16, // Add padding for some spacing
  },
  locationTitle: {
    marginTop: 10, // Reduced marginTop to reduce the gap between the title and the data
    fontSize: 24, // Increased font size for the location title
    fontWeight: "bold",
    color: "#274472", // Text color
    textAlign: "center",
    borderRadius: 5,
   // Light cyan background for title (optional)
  },
  dateTitle:{
    marginTop: 2, // Reduced marginTop to reduce the gap between the title and the data
    paddingBottom:10,
    fontSize: 15, // Increased font size for the location title
    fontWeight: "bold",
    color: "#274472", // Text color
    textAlign: "center",
    borderRadius: 5,
  },
  dataText: {
    fontSize: 18, // Increased font size for the data text
    fontWeight: 'bold', // Bold font for data text
    color: "#4682B4", // Steel blue color for data text
    marginBottom: 4, // Reduced bottom margin to reduce the gap between text
    textAlign: 'center', // Centers text
  },
})