import { Text, View, StyleSheet } from 'react-native';
import {Stack} from 'expo-router'
import Customheader from '@/components/CustomHeader'


export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{header:()=> <Customheader/>}}
      />
      <View >
        <Text >Profile goes here</Text>
      </View>
    </>
  );
}
