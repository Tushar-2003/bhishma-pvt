
export const locationCoordinates = {
    Varanasi: { latitude: 25.3176, longitude: 82.9739,title:"banaras" },
    Haridwar: { latitude: 29.9457, longitude: 78.1642,title:"Haridwar" },
    Kolkata: { latitude: 22.5726, longitude: 88.3639,title:"Kolkata" },
    Patna: { latitude: 25.5941, longitude: 85.1376,title:"Patna" },
    Prayagraj: { latitude: 25.4358, longitude: 81.8463,title:"Prayagraj" },
  };
  
  export const GetCoordinates = (locationName) => {
    // Fetch coordinates from the mapping, default to null if location not found
    return locationCoordinates[locationName] || null;
  };
  