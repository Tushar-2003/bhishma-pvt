import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'


export default function ProfileScreen() {

  // Predefined variables
  const name = "None";
  const team = "BHISHM";
  const handleDownload = (reportType) => {
    console.log(`${reportType} button clicked!`);
    alert(`${reportType} download initiated!`);
    // Replace this with the actual logic to download the respective reports
  };
  
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <View >
      <View style={styles.container}>
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>User Details</Text>
        {/* Display Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Name: {name}</Text>
          <Text style={styles.detailsText}>Team Name: {team}</Text>
        </View>
        {/* Download Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Past 5 Yrs Report")}>
          <Text style={styles.buttonText}>Download Past 5 Yrs Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Future Prediction")}>
          <Text style={styles.buttonText}>Future Prediction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("today's Report")}>
          <Text style={styles.buttonText}>Today's report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Govt Report")}>
          <Text style={styles.buttonText}>Govt Report</Text>
        </TouchableOpacity>
      </ScrollView>
    
      </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#E3F2FD', // Light blue background
    
  },
  header: {
    backgroundColor: '#1E88E5',
    padding: 20,
    alignItems: 'center',
  
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
   
  },
  iconsContainer: {
    flexDirection: 'row', // Arrange icons horizontally
  },
  icon: {
    padding: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  content: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1', // Dark blue text
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BBDEFB',
  },
  detailsText: {
    fontSize: 16,
    color: '#0D47A1',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1565C0',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

