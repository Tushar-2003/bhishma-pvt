import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Link } from "expo-router";
import ProgressBar from 'react-native-progress/Bar';
import React from 'react'
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocation } from "@/utils/LocationContext";

const data = require('@/utils/Dataset.json'); 
// Allahabad
//BhathingGhat
// Rishikesh
//Varanasi
//Rudrapryag
const locationMessages = {
  Allahabad: 'Water quality is excellent, suitable for drinking and bathing.',
  Varanasi: 'Water quality is poor, bathing is allowed but drinking is not recommended.',
  BhathingGhat: 'Water quality is moderate, bathing is allowed but drinking is not recommended.',
  Rishikesh: 'Water quality is moderate, use caution for any direct contact.',
  Rudrapryag: 'Water quality is poor, avoid bathing and do not drink.',
};

export default function HomePage() {
  

  const date = '2017-01-02'
  const { currentLocation } = useLocation();
  let currentcity = `${currentLocation}`;
  const cityData = data[currentcity];
  const dataPoint = cityData ? cityData[date] : null;

  const message = locationMessages[currentLocation] || 'Water quality information not available for this location.';
  const score = 50;

  // ph normalize
  



  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
          <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Today's summary @ {currentLocation}</Text>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>{message}</Text>
            <Text style={styles.summaryScore} >{score} </Text>
          </View>
        </View>
        <View style={styles.qualityReport}>
          <Text style={styles.qualityReportTitle}>Ganga Quality report</Text>

          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>Temperature</Text>
            <ProgressBar progress={0.7} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint.Temperature} °C</Text>
          </View>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>Dissolved O2</Text>
            <ProgressBar progress={0.5} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint['Dissolved Oxygen']} Mg/L </Text>
          </View>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>pH</Text>
            <ProgressBar progress={0.7} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint.pH}</Text>
          </View>
        </View>
        <View style={styles.otherDataPoints}>
          <Text style={styles.qualityReportTitle}>Other Data Points</Text>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>Conductivity</Text>
            <ProgressBar progress={0.9} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint.Conductivity} µS/cm</Text>
          </View>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>BOD</Text>
            <ProgressBar progress={0.6} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint['Bio Chemical Oxygen Demand']} mg/L</Text>
          </View>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>Fecal Coliform</Text>
            <ProgressBar progress={0.4} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint['Fecal Coliform']}</Text>
          </View>
          <View  style={styles.qualityItem}>
            <Text style={styles.qualityText}>Total Coliform</Text>
            <ProgressBar progress={0.8} width={200} height={30} borderWidth={1} style={styles.qualityBar} />
            <Text style={styles.qualityValue}>{dataPoint['Total Coliform']}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  header: {
    backgroundColor: '#1E88E5',
    padding: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  summary: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0D47A1',
  },
  summaryBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BBDEFB',
    flexDirection:'row',
  },
  summaryText: {
    color: '#333',
    flex: 3,

  },
  summaryScore: {
    color: '#555',
    flex: 1,
    fontSize:24,
  },
  qualityReport: {
    marginBottom: 20,
  },
  qualityReportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#0D47A1',
  },
  qualityItem: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 20,
    marginHorizontal:10,
  },
  qualityText: {
    flex: 1,
    fontSize: 16,
    color: '#0D47A1',
  },
  qualityBar: {
    flex: 1,
    height:20,
    
  },
  qualityValue: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    color: '#0D47A1',
  },
  otherDataPoints: {
    marginBottom: 20,
  },
  otherDataPointsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0D47A1',
  },
  dataPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BBDEFB',
  },
  dataPointText: {
    fontSize: 16,
    color: '#0D47A1',
  },
  dataPointValue: {
    fontSize: 16,
    color: '#1E88E5',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#1565C0',
  },
  footerSquare: {
    width: 30,
    height: 30,
    backgroundColor: '#00a1ff',
  },
  
});