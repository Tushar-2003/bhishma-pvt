import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {BarChart} from 'react-native-gifted-charts';
import { useLocation } from "@/utils/LocationContext";


const Dataset = require('@/utils/Dataset.json'); 

const ChartComponent = () => {
  
  const { currentLocation } = useLocation(); // Get current location from context
  const [selectedParameter, setSelectedParameter] = useState("Temperature");
  const [chartData, setChartData] = useState([]);


  useEffect(() => {
    const processData = () => {
      const cityData = Dataset[currentLocation];
      if (!cityData) return;

      const processedData = Object.keys(cityData).map((date) => ({
        value: cityData[date][selectedParameter],
        label: date,
      }));

      setChartData(processedData);
    };

    processData();
  }, [currentLocation, selectedParameter]);



  return (
  <View>
    <Text>ChartComponent</Text>
  </View>
  )
}

export default ChartComponent

const styles = StyleSheet.create({})