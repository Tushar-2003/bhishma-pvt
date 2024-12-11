import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

const Header = () => (
  <SafeAreaView style={styles.header}>
    <View style={styles.headerContent}>
      {/* Header Text */}
      <Text style={styles.headerText}>EXPO-REPO</Text>

      {/* Icons Section on the Right */}
      <View style={styles.iconsContainer}>
        {/* User Profile Icon */}
        <TouchableOpacity style={styles.icon}>
          <Image 
            source={{ uri: 'data:image/png;base64,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' }} 
            style={styles.iconImage} 
          />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity style={styles.icon}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENM7iPUIkWiGPQriGze2io7U_FQmRohCTmQ&s' }} 
            style={styles.iconImage}  
          />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const Footer = () => (
  <SafeAreaView style={styles.footer}>
    <Text style={styles.footerText}>Namami-Gange</Text>
  </SafeAreaView>
);

const App = () => {
  // Predefined variables
  const name = "Leelam";
  const company = "SSTC";
  const location = "Varanasi";

  const handleDownload = (reportType) => {
    console.log(`${reportType} button clicked!`);
    alert(`${reportType} download initiated!`);
    // Replace this with the actual logic to download the respective reports
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>User Details</Text>

        {/* Display Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Name: {name}</Text>
          <Text style={styles.detailsText}>Company Name: {company}</Text>
          <Text style={styles.detailsText}>Location: {location}</Text>
        </View>

        {/* Download Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Past 5 Yrs Report")}>
          <Text style={styles.buttonText}>Download Past 5 Yrs Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Future Prediction")}>
          <Text style={styles.buttonText}>Future Prediction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Company Report")}>
          <Text style={styles.buttonText}>Company Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload("Govt Report")}>
          <Text style={styles.buttonText}>Govt Report</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Make sure header text takes up available space
   
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

export default App;
