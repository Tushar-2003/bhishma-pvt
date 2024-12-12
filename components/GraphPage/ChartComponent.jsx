import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState} from 'react'
import {LineChart} from 'react-native-gifted-charts';
import { useLocation } from "@/utils/LocationContext";


const Dataset = require('@/utils/Dataset.json'); 

const ChartComponent = () => {
  
  const { currentLocation } = useLocation(); // Get current location from context
  const [selectedParameter, setSelectedParameter] = useState("Temperature");
  const [chartData, setChartData] = useState([]);
  const currentDate = "2017-01-15";

  
  const calculateDateRange = (startDate, pastDays, futureDays) => {
    const date = new Date(startDate);

    // Generate past dates
    const pastDates = Array.from({ length: pastDays }, (_, i) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - (pastDays - i));
      return newDate.toISOString().split("T")[0];
    });

    // Add the current date
    const dates = [...pastDates, startDate];

    // Generate future dates
    const futureDates = Array.from({ length: futureDays }, (_, i) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + (i + 1));
      return newDate.toISOString().split("T")[0];
    });

    return [...dates, ...futureDates];
  };

  useEffect(() => {
    const processData = () => {
      const cityData = Dataset[currentLocation];
      if (!cityData) return;

      const dateRange = calculateDateRange(currentDate, 10, 3);
      
      const filteredData = dateRange.map((date) => ({
        value: cityData[date][selectedParameter],
        label:new Date(date).getDate().toString(), // Show the date as the x-axis label
        dataPointText: cityData[date][selectedParameter],
      }));

      setChartData(filteredData);
    };

    processData();
  }, [currentLocation, selectedParameter]);


  
  return (
    
<View>
      <View style={styles.container}>
        <Text style={styles.title}>
          {currentLocation} - {selectedParameter}
        </Text>

        {/* Line Chart */}
        <LineChart
          data={chartData} 
          dataPointsColor="red" 
          dataPointsWidth={1}
          thickness={3}
          xAxisTextStyle={{ color: "black", fontSize: 30 }}
          yAxisTextStyle={{ color: "black" }}
          color="#007bff"
          initialSpacing={10}
          noOfSections={10}
        />

        {/* Buttons to select parameters */}
        <View style={styles.buttonContainer}>
          {Object.keys(Dataset[currentLocation]["2017-01-01"]).map((key) => (
            <Button
              key={key}
              title={key}
              onPress={() => setSelectedParameter(key)}
              style ={styles.buttonComponent}
              color={selectedParameter === key ? "lightblue" : "gray"} // Highlight selected button
              
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default ChartComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    margin: 10,
    
    alignItems:"center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonComponent:{

  },

})