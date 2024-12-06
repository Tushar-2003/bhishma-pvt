// context/LocationContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const LocationContext = createContext();

// Location Provider
export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState("Varanasi"); // Default location
  const [options] = useState([
    "Varanasi",
    "Haridwar",
    "Kolkata",
    "Patna",
    "Prayagraj",
  ]);

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation, options }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook for accessing location context
export const useLocation = () => useContext(LocationContext);
