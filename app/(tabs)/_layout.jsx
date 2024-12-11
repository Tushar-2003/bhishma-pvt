import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { LocationProvider } from "@/utils/LocationContext";

export default function RootLayout() {
  return( 
    <LocationProvider>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'lightgreen',
        tabBarStyle: {
        backgroundColor: '#111',
        height:60,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title:'Home',
          tabBarIcon:({color, focused})=>(
            <Ionicons name={focused?'home-sharp' : 'home-outline'} color={color} size={24} />
          )

        }}
      />
      <Tabs.Screen 
        name="Chat" 
        options={{
          title:'Chat',
          tabBarIcon:({color, focused})=>(
            <Ionicons name={focused?'chatbubbles-sharp' : 'chatbubbles-outline'} color={color} size={24} />
          )

        }}
      />
      <Tabs.Screen 
        name="Graph"
        options={{
          title:'Graph',
          tabBarIcon:({color, focused})=>(
            <Ionicons name={focused?'analytics-sharp' : 'analytics-outline'} color={color} size={24}/>
          )
        }}
      />
      <Tabs.Screen 
        name="Map"
        options={{
          title:'Map',
          tabBarIcon:({color, focused})=>(
            <Ionicons name={focused?'map-sharp' : 'map-outline'} color={color} size={24} />
          )
        }}
      />
          <Tabs.Screen 
        name="Profile"
        options={{
          title:'Profile',
          tabBarIcon:({color, focused})=>(
            <Ionicons name={focused?'documents-sharp' : 'documents-outline'} color={color} size={24} />
          )
        }}
      />
    </Tabs>
    </LocationProvider>
  )
}
