import React from 'react'
import { Text, View, Flatlist, ScrollView , StyleSheet } from 'react-native';
import { useLocation } from "@/utils/LocationContext";

const data = require('@/utils/Dataset.json'); 


const CurrentLocationDetail = () => {
  const date = '2017-01-03'
  const { currentLocation } = useLocation();
  let currentcity = `${currentLocation}`;
  const cityData = data[currentcity];
  const dataPoint = cityData ? cityData[date] : null;

  
  
  return (
    <View style={styles.container}>
      <Text style={styles.locationTitle}>{currentLocation}</Text>
      <Text style={styles.dateTitle}>({date})</Text>

      <View style={styles.dataContainer}>
        <View style={styles.row}><Text style={styles.label}>Temperature:</Text><Text style={styles.value}>{dataPoint.Temperature}°C</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>pH:</Text><Text style={styles.value}>{dataPoint.pH}</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Conductivity:</Text><Text style={styles.value}>{dataPoint.Conductivity} µS/cm</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Dissolved Oxygen:</Text><Text style={styles.value}>{dataPoint['Dissolved Oxygen']} mg/L</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Bio Chemical Oxygen Demand:</Text><Text style={styles.value}>{dataPoint['Bio Chemical Oxygen Demand']} mg/L</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Nitrate:</Text><Text style={styles.value}>{dataPoint.Nitrate} mg/L</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Fecal Coliform:</Text><Text style={styles.value}>{dataPoint['Fecal Coliform']}</Text></View>
        <View style={styles.divider} />

        <View style={styles.row}><Text style={styles.label}>Total Coliform:</Text><Text style={styles.value}>{dataPoint['Total Coliform']}</Text></View>
      </View>
    </View>
  )
}

export default CurrentLocationDetail


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 8,
    backgroundColor: '#f5f5f5',
  },
  locationTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#274472',
    textAlign: 'left',
  },
  dateTitle: {
    marginTop: 1,
    paddingBottom: 10,
    fontSize: 10,
    color: '#274472',
    textAlign: 'left',
  },
  dataContainer: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    flex: 7,
    fontSize: 15,
    color: '#4682B4',
    textAlign: 'left',
  },
  value: {
    flex: 3,
    fontSize: 15,
    color: '#4682B4',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#274472',
    marginVertical: 1,
    opacity: 0.7,
  },
});