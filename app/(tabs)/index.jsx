import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Link } from "expo-router";
import React from 'react'
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomePage from '@/components/HomePage/HomePage'


export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <HomePage/>
      {/* <DatapointComponents /> */}
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
  },
  summaryText: {
    color: '#333',
  },
  qualityReport: {
    marginBottom: 20,
  },
  qualityReportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0D47A1',
  },
  qualityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  qualityText: {
    flex: 1,
    fontSize: 16,
    color: '#0D47A1',
  },
  qualityBar: {
    flex: 2,
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',

  },
  qualityBarFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1E88E5',
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