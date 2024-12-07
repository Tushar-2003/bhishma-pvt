import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const Header = () => (
  <SafeAreaView style={styles.header}>
    <View style={styles.headerContent}>
      <Text style={styles.headerText}>Namami-Gange</Text>
    </View>
  </SafeAreaView>
);

const Footer = () => (
  <SafeAreaView style={styles.footer}>
    <View style={styles.footerSquare} />
    <View style={styles.footerSquare} />
    <View style={styles.footerSquare} />
    <View style={[styles.footerSquare, styles.footerSquareBlue]} />
  </SafeAreaView>
);

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Today's summary @ Varanasi</Text>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>
In the Varanasi region, the Ganga River's water quality is critically impacted by urbanization,
 with high levels of pollution and contamination from sewage and industrial effluents. 
 Despite periodic improvements due to rainfall, the river often shows elevated levels of ammonia and sulfur,
  particularly during the dry season. These factors contribute to poor water quality, making the river's ecosystem vulnerabl
            </Text>
          </View>
        </View>
        <View style={styles.qualityReport}>
          <Text style={styles.qualityReportTitle}>Ganga Quality report</Text>
          {['Dissolved Oxygen', 'pH Level', 'Turbidity', 'Conductivity'].map((item, index) => (
            <View key={index} style={styles.qualityItem}>
              <Text style={styles.qualityText}>{item}</Text>
              <View style={styles.qualityBar}>
                <View style={styles.qualityBarFill} />
              </View>
              <Text style={styles.qualityValue}>8.2mg/L</Text>
            </View>
          ))}
        </View>
        <View style={styles.otherDataPoints}>
          <Text style={styles.otherDataPointsTitle}>Other Data Points</Text>
          {['Dissolved Oxygen', 'Dissolved Oxygen', 'Dissolved Oxygen', 'Dissolved Oxygen'].map((item, index) => (
            <View key={index} style={styles.dataPoint}>
              <Text style={styles.dataPointText}>{item}</Text>
              <Text style={styles.dataPointValue}>8.2mg/L</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

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

export default App;
