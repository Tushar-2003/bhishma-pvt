import React,{ useEffect, useState } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import {Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import {GetCoordinates}  from "@/utils/GetCoordinates"; 
import { useLocation } from "@/utils/LocationContext";



const locations = ["Varanasi", "Haridwar", "Kolkata", "Patna", "Prayagraj"];

export default function MapComponent() {
  const { currentLocation, setCurrentLocation } = useLocation();
  const [coordinates, setCoordinates] = useState([]);
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const allCoordinates = await Promise.all(
          locations.map(async (location) => {
            const coords = await GetCoordinates(location); // Assuming GetCoordinates is async
            return coords ? { ...coords, title: location } : null;
          })
        );

        // Filter out null values if any location couldn't be fetched
        const validCoordinates = allCoordinates.filter(coords => coords !== null);

        setCoordinates(validCoordinates);

        // Calculate region to fit all markers
        if (validCoordinates.length > 0) {
          const latitudes = validCoordinates.map(coord => coord.latitude);
          const longitudes = validCoordinates.map(coord => coord.longitude);

          const minLat = Math.min(...latitudes);
          const maxLat = Math.max(...latitudes);
          const minLong = Math.min(...longitudes);
          const maxLong = Math.max(...longitudes);

          const latitudeDelta = maxLat - minLat;
          const longitudeDelta = maxLong - minLong;

          setRegion({
            latitude: (minLat + maxLat) / 2,
            longitude: (minLong + maxLong) / 2,
            latitudeDelta: latitudeDelta + 2,  // Extra padding
            longitudeDelta: longitudeDelta + 2,  // Extra padding
          });
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchCoordinates(); // Run the async function
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        loadingEnabled={true}
      >
        {coordinates.map((coordinate, index) => (
          <Marker
          key={index}
          coordinate={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          }}
          title={coordinate.title} // Title for the marker
          description={`Location: ${coordinate.title} `} // Description for additional info
          onPress={() => {
            setCurrentLocation(coordinate.title); // Update the location in the context
          }}        
        >

        </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"65%",
    alignItems:"center",
    backgroundColor: "#C3E0E5", // Light blue background
    justifyContent: "center"
  },
  map: {
    width:"95%",
    height:"100%",
    backgroundColor: "#C3E0E5", // Light blue background
    justifyContent: "center",
    
  },
  locationTitle:{
    paddingTop: 10,
    fontSize:18,
    fontWeight:"bold",
    color:"#444",
     backgroundColor: "#C3E0E5", // Light blue background
    justifyContent: "center",
    
  },
});
