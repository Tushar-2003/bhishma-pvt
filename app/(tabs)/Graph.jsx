import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'
import { useLocation } from "@/utils/LocationContext";



export default function GraphScreen() {
  const { currentLocation, setCurrentLocation } = useLocation();
  

  return (
    <SafeAreaView>
      <Text>hi</Text>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <Text>{currentLocation}</Text>
    </SafeAreaView>
  );
}

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
