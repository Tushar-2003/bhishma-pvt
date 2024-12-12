
export const locationCoordinates = {
    Varanasi: { latitude: 25.3176, longitude: 82.9739,title:"banaras" },
    Allahabad: { latitude: 25.4683, longitude: 81.8546,title:"Allahbad" },
    BhathingGhat: { latitude: 25.2789, longitude: 81.8280,title:"BhathingGhat" },
    Rishikesh: { latitude: 30.1158, longitude: 78.2853,title:"Rishikesh" },
    Rudrapryag: { latitude: 30.2850, longitude: 78.9822,title:"Rudrapryag" },
  };
  
  export const GetCoordinates = (locationName) => {
    // Fetch coordinates from the mapping, default to null if location not found
    return locationCoordinates[locationName] || null;
  };
  