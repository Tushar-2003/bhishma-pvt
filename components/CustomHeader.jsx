import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useLocation } from "@/utils/LocationContext";

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let pageName = (route.name === "index" ? "Home" : route.name).toUpperCase();


  // location
  const [modalVisible, setModalVisible] = useState(false);
  const { currentLocation, setCurrentLocation, options } = useLocation();
  return (
    <View style={styles.header}>
      <Text
      style={styles.titleText}
      >{pageName}</Text>
      
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="location-outline" size={26} color="black" />
        <Text style={styles.locationText}>{currentLocation}</Text>
      </TouchableOpacity>

      {/* modal for location */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select an Option</Text>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setCurrentLocation(item); // Update the location in the context
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    gnItems: "center",
    justifyContent: "space-between",
    height:60,
    paddingHorizontal: 10,
    backgroundColor: "lightblue",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  locationButton:{
    alignSelf:"center",
  },
  titleText:{
    fontSize:18,
    fontWeight:"bold",
    color:"#444",
    alignSelf:"center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
})

export default CustomHeader